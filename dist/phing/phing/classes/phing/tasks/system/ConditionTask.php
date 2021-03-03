<?php
/*
 *  $Id: 6c015291a1baa566c81811171f8dc3765d23ec83 $
 *
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

require_once 'phing/tasks/system/condition/ConditionBase.php';

/**
 * <condition> task as a generalization of <available>
 *
 * <p>This task supports boolean logic as well as pluggable conditions
 * to decide, whether a property should be set.</p>
 *
 * <p>This task does not extend Task to take advantage of
 * ConditionBase.</p>
 *
 * @author    Andreas Aderhold <andi@binarycloud.com>
 * @copyright 2001,2002 THYRELL. All rights reserved
 * @version   $Id: 6c015291a1baa566c81811171f8dc3765d23ec83 $
 * @package   phing.tasks.system
 */
class ConditionTask extends ConditionBase
{
    /** @var string $property */
    private $property;

    /** @var string $value */
    private $value = "true";

    /** @var string $alternative */
    private $alternative;
    
    /**
     * The name of the property to set. Required.
     * @param string $p
     * @return void
     */
    public function setProperty($p)
    {
        $this->property = $p;
    }

    /**
     * The value for the property to set. Defaults to "true".
     * @param string $v
     * @return void
     */
    public function setValue($v)
    {
        $this->value = $v;
    }

    /**
     * The value for the property to set, if condition evaluates to false.
     * If this attribute is not specified, the property will not be set.
     *
     * @param string $v 
     */
    public function setElse($v)
    {
        $this->alternative = $v;
    }
    
    /**
     * See whether our nested condition holds and set the property.
     * @throws BuildException
     * @return void
     */
    public function main()
    {
        if ($this->countConditions() > 1) {
            throw new BuildException(
                "You must not nest more than one condition into <condition>"
            );
        }
        if ($this->countConditions() < 1) {
            throw new BuildException(
                "You must nest a condition into <condition>"
            );
        }
        if ($this->property === null) {
            throw new BuildException('The property attribute is required.');
        }
        $cs = $this->getIterator();
        if ($cs->current()->evaluate()) {
            $this->log("Condition true; setting " . $this->property . " to " . $this->value, Project::MSG_DEBUG);
            $this->project->setNewProperty($this->property, $this->value);
        } elseif ($this->alternative !== null) {
            $this->log("Condition false; setting " . $this->property . " to " . $this->alternative, Project::MSG_DEBUG);
            $this->project->setNewProperty($this->property, $this->alternative);
        } else {
            $this->log('Condition false; not setting ' . $this->property, Project::MSG_DEBUG);
        }
    }
}
