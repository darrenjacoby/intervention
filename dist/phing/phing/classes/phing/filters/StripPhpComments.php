<?php
/**
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * This software consists of voluntary contributions made by many individuals
 * and is licensed under the LGPL. For more information please see
 * <http://phing.info>.
 */
include_once 'phing/filters/BaseFilterReader.php';
include_once 'phing/filters/ChainableReader.php';

/**
 * This is a Php comment and string stripper reader that filters
 * those lexical tokens out for purposes of simple Php parsing.
 * (if you have more complex Php parsing needs, use a real lexer).
 * Since this class heavily relies on the single char read function,
 * you are recommended to make it work on top of a buffered reader.
 *
 * @author    <a href="mailto:yl@seasonfive.com">Yannick Lecaillez</a>
 * @author    hans lellelid, hans@velum.net
 * @version   $Id: e46d7849417c2b8249f317003a3ebc161fac0e96 $
 * @see       FilterReader
 * @package   phing.filters
 */
class StripPhpComments extends BaseFilterReader implements ChainableReader
{
    /**
     * The read-ahead character, used for effectively pushing a single
     * character back. -1 indicates that no character is in the buffer.
     */
    private $_readAheadCh = -1;

    /**
     * Whether or not the parser is currently in the middle of a string
     * literal.
     * @var boolean
     */
    private $_inString = false;

    /**
     * Returns the  stream without Php comments.
     *
     * @param null $len
     * @return string the resulting stream, or -1
     *             if the end of the resulting stream has been reached
     *
     */
    public function read($len = null)
    {

        $buffer = $this->in->read($len);
        if ($buffer === -1) {
            return -1;
        }
        $newStr = '';
        $tokens = token_get_all($buffer);

        foreach ($tokens as $token) {
            if (is_array($token)) {
                list($id, $text) = $token;

                switch ($id) {
                    case T_COMMENT:
                    case T_DOC_COMMENT:
                        // no action on comments
                        continue 2;

                    default:
                        $newStr .= $text;
                        continue 2;
                }
            }
            $newStr .= $token;
        }

        return $newStr;
    }

    /**
     * Returns the next character in the filtered stream, not including
     * Php comments.
     *
     * @return int the next character in the resulting stream, or -1
     *             if the end of the resulting stream has been reached
     *
     * @throws IOException if the underlying stream throws an IOException
     *                     during reading
     * @deprecated
     */
    public function readChar()
    {
        $ch = -1;

        if ($this->_readAheadCh !== -1) {
            $ch = $this->_readAheadCh;
            $this->_readAheadCh = -1;
        } else {
            $ch = $this->in->readChar();
            if ($ch === "\"") {
                $this->_inString = !$this->_inString;
            } else {
                if (!$this->_inString) {
                    if ($ch === "/") {
                        $ch = $this->in->readChar();
                        if ($ch === "/") {
                            while ($ch !== "\n" && $ch !== -1) {
                                $ch = $this->in->readChar();
                            }
                        } else {
                            if ($ch === "*") {
                                while ($ch !== -1) {
                                    $ch = $this->in->readChar();
                                    while ($ch === "*" && $ch !== -1) {
                                        $ch = $this->in->readChar();
                                    }

                                    if ($ch === "/") {
                                        $ch = $this->readChar();
                                        echo "$ch\n";
                                        break;
                                    }
                                }
                            } else {
                                $this->_readAheadCh = $ch;
                                $ch = "/";
                            }
                        }
                    }
                }
            }
        }

        return $ch;
    }

    /**
     * Creates a new StripPhpComments using the passed in
     * Reader for instantiation.
     *
     * @param A|Reader $reader
     * @internal param A $reader Reader object providing the underlying stream.
     *               Must not be <code>null</code>.
     *
     * @return $this a new filter based on this configuration, but filtering
     *           the specified reader
     */
    public function chain(Reader $reader)
    {
        $newFilter = new StripPhpComments($reader);
        $newFilter->setProject($this->getProject());

        return $newFilter;
    }
}
