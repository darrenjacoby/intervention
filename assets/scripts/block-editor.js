/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/scripts/admin/block-editor.js":
/*!*************************************************!*\
  !*** ./resources/scripts/admin/block-editor.js ***!
  \*************************************************/
/***/ (() => {

wp.domReady(function () {
  /**
   * Shorthand for localised interventionBlockEditor
   */
  var config = interventionBlockEditor;
  /**
   * Remove Block Editor
   *
   * Remove components for WordPress block editor
   */

  /**
   * Remove Block Type Category
   *
   * @param {string} category
   */

  var removeBlockTypeCategory = function removeBlockTypeCategory(category) {
    var blockTypes = wp.blocks.getBlockTypes();
    blockTypes.forEach(function (blockType) {
      if (blockType.category === category) {
        wp.blocks.unregisterBlockType(blockType.name);
      }
    });
  };
  /**
   * Type/Text
   */


  if (config.includes('add.blocks.text')) {
    removeBlockTypeCategory('text');
  }

  if (config.includes('add.blocks.text.paragraph')) {
    wp.blocks.unregisterBlockType('core/paragraph');
  }

  if (config.includes('add.blocks.text.heading')) {
    wp.blocks.unregisterBlockType('core/heading');
  }

  if (config.includes('add.blocks.text.list')) {
    wp.blocks.unregisterBlockType('core/list');
  }

  if (config.includes('add.blocks.text.quote')) {
    wp.blocks.unregisterBlockType('core/quote');
  }

  if (config.includes('add.blocks.text.code')) {
    wp.blocks.unregisterBlockType('core/code');
  }

  if (config.includes('add.blocks.text.classic')) {
    wp.blocks.unregisterBlockType('core/freeform');
  }

  if (config.includes('add.blocks.text.preformatted')) {
    wp.blocks.unregisterBlockType('core/preformatted');
  }

  if (config.includes('add.blocks.text.pullquote')) {
    wp.blocks.unregisterBlockType('core/pullquote');
  }

  if (config.includes('add.blocks.text.table')) {
    wp.blocks.unregisterBlockType('core/table');
  }

  if (config.includes('add.blocks.text.verse')) {
    wp.blocks.unregisterBlockType('core/verse');
  }
  /**
   * Type/Media
   */


  if (config.includes('add.blocks.media')) {
    removeBlockTypeCategory('media');
  }

  if (config.includes('add.blocks.media.image')) {
    wp.blocks.unregisterBlockType('core/image');
  }

  if (config.includes('add.blocks.media.gallery')) {
    wp.blocks.unregisterBlockType('core/gallery'); // ??
  }

  if (config.includes('add.blocks.media.audio')) {
    wp.blocks.unregisterBlockType('core/audio');
  }

  if (config.includes('add.blocks.media.cover')) {
    wp.blocks.unregisterBlockType('core/cover');
  }

  if (config.includes('add.blocks.media.file')) {
    wp.blocks.unregisterBlockType('core/file');
  }

  if (config.includes('add.blocks.media.media-text')) {
    wp.blocks.unregisterBlockType('core/media-text');
  }

  if (config.includes('add.blocks.media.video')) {
    wp.blocks.unregisterBlockType('core/video');
  }
  /**
   * Type/Design
   */


  if (config.includes('add.blocks.design')) {
    removeBlockTypeCategory('design');
  }

  if (config.includes('add.blocks.design.buttons')) {
    wp.blocks.unregisterBlockType('core/buttons');
  }

  if (config.includes('add.blocks.design.columns')) {
    wp.blocks.unregisterBlockType('core/columns');
  }

  if (config.includes('add.blocks.design.group')) {
    wp.blocks.unregisterBlockType('core/group');
  }

  if (config.includes('add.blocks.design.more')) {
    wp.blocks.unregisterBlockType('core/more');
  }

  if (config.includes('add.blocks.design.page-break')) {
    wp.blocks.unregisterBlockType('core/nextpage');
  }

  if (config.includes('add.blocks.design.separator')) {
    wp.blocks.unregisterBlockType('core/separator');
  }

  if (config.includes('add.blocks.design.spacer')) {
    wp.blocks.unregisterBlockType('core/spacer');
  }

  if (config.includes('add.blocks.design.site-logo')) {
    wp.blocks.unregisterBlockType('core/site-logo');
  }

  if (config.includes('add.blocks.design.site-tagline')) {
    wp.blocks.unregisterBlockType('core/site-tagline');
  }

  if (config.includes('add.blocks.design.site-title')) {
    wp.blocks.unregisterBlockType('core/site-title');
  }

  if (config.includes('add.blocks.design.archive-title')) {
    wp.blocks.unregisterBlockType('core/query-title');
  } // variations?


  if (config.includes('add.blocks.design.post-categories')) {
    wp.blocks.unregisterBlockType('core/post-terms');
  }

  if (config.includes('add.blocks.design.post-tags')) {
    wp.blocks.unregisterBlockType('core/post-terms');
  }
  /**
   * Type/Widgets
   */


  if (config.includes('add.blocks.widgets')) {
    removeBlockTypeCategory('widgets');
  }

  if (config.includes('add.blocks.widgets.shortcode')) {
    wp.blocks.unregisterBlockType('core/shortcode');
  }

  if (config.includes('add.blocks.widgets.archives')) {
    wp.blocks.unregisterBlockType('core/archives');
  }

  if (config.includes('add.blocks.widgets.calendar')) {
    wp.blocks.unregisterBlockType('core/calendar');
  }

  if (config.includes('add.blocks.widgets.categories')) {
    wp.blocks.unregisterBlockType('core/categories');
  }

  if (config.includes('add.blocks.widgets.custom-html')) {
    wp.blocks.unregisterBlockType('core/html');
  }

  if (config.includes('add.blocks.widgets.latest-comments')) {
    wp.blocks.unregisterBlockType('core/latest-comments');
  }

  if (config.includes('add.blocks.widgets.latest-posts')) {
    wp.blocks.unregisterBlockType('core/latest-posts');
  }

  if (config.includes('add.blocks.widgets.page-list')) {
    wp.blocks.unregisterBlockType('core/page-list');
  }

  if (config.includes('add.blocks.widgets.rss')) {
    wp.blocks.unregisterBlockType('core/rss');
  }

  if (config.includes('add.blocks.widgets.social-icons')) {
    wp.blocks.unregisterBlockType('core/social-links');
  }

  if (config.includes('add.blocks.widgets.tag-cloud')) {
    wp.blocks.unregisterBlockType('core/tag-cloud');
  }

  if (config.includes('add.blocks.widgets.search')) {
    wp.blocks.unregisterBlockType('core/search');
  }
  /**
   * Type/Theme
   */


  if (config.includes('add.blocks.theme')) {
    removeBlockTypeCategory('theme');
  }

  if (config.includes('add.blocks.theme.query')) {
    wp.blocks.unregisterBlockType('core/query');
  }

  if (config.includes('add.blocks.theme.post-title')) {
    wp.blocks.unregisterBlockType('core/post-title');
  }

  if (config.includes('add.blocks.theme.post-content')) {
    wp.blocks.unregisterBlockType('core/post-content');
  }

  if (config.includes('add.blocks.theme.post-date')) {
    wp.blocks.unregisterBlockType('core/post-date');
  }

  if (config.includes('add.blocks.theme.post-excerpt')) {
    wp.blocks.unregisterBlockType('core/post-excerpt');
  }

  if (config.includes('add.blocks.theme.post-featured-image')) {
    wp.blocks.unregisterBlockType('core/post-featured-image');
  }

  if (config.includes('add.blocks.theme.login-out')) {
    wp.blocks.unregisterBlockType('core/loginout');
  }

  if (config.includes('add.blocks.theme.posts-list')) {
    wp.blocks.unregisterBlockType('core/posts-list');
  }
  /**
   * Type/Embeds
   */

  /*
    if (config.includes('add.embeds')) {
        removeBlockTypeCategory('theme');
    }
    */


  if (config.includes('add.blocks.embeds')) {
    wp.blocks.unregisterBlockType('core/embed');
  }
  /**
   * Panels
   */


  if (config.includes('all')) {
    wp.data.dispatch('core/edit-post').removeEditorPanel('taxonomy-panel-category');
    wp.data.dispatch('core/edit-post').removeEditorPanel('taxonomy-panel-post_tag');
    wp.data.dispatch('core/edit-post').removeEditorPanel('featured-image');
    wp.data.dispatch('core/edit-post').removeEditorPanel('post-link');
    wp.data.dispatch('core/edit-post').removeEditorPanel('page-attributes');
    wp.data.dispatch('core/edit-post').removeEditorPanel('post-excerpt');
    wp.data.dispatch('core/edit-post').removeEditorPanel('discussion-panel');
  }

  if (config.includes('excerpt')) {
    wp.data.dispatch('core/edit-post').removeEditorPanel('post-excerpt');
  }

  if (config.includes('discussion')) {
    wp.data.dispatch('core/edit-post').removeEditorPanel('discussion-panel');
    wp.blocks.unregisterBlockType('core/latest-comments');
  }

  if (config.includes('categories')) {
    wp.data.dispatch('core/edit-post').removeEditorPanel('taxonomy-panel-category');
  }

  if (config.includes('tags')) {
    wp.data.dispatch('core/edit-post').removeEditorPanel('taxonomy-panel-post_tag');
  }

  if (config.includes('attributes')) {
    wp.data.dispatch('core/edit-post').removeEditorPanel('attributes');
  }

  if (config.includes('link')) {
    wp.data.dispatch('core/edit-post').removeEditorPanel('post-link');
  }

  if (config.includes('featured-image')) {
    wp.data.dispatch('core/edit-post').removeEditorPanel('featured-image');
  }
});

/***/ }),

/***/ "./resources/styles/user-interface.css":
/*!*********************************************!*\
  !*** ./resources/styles/user-interface.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/scripts/block-editor": 0,
/******/ 			"styles/user-interface": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkintervention"] = self["webpackChunkintervention"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["styles/user-interface"], () => (__webpack_require__("./resources/scripts/admin/block-editor.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["styles/user-interface"], () => (__webpack_require__("./resources/styles/user-interface.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;