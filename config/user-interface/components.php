<?php

$common = require_once 'components/common.php';
$dashboard = require_once 'components/dashboard.php';
/*
$posts = require_once 'components/posts.php';
$media = require_once 'components/media.php';
$pages = require_once 'components/pages.php';
$comments = require_once 'components/comments.php';
$appearance = require_once 'components/appearance.php';
$plugins = require_once 'components/plugins.php';
$users = require_once 'components/users.php';
$tools = require_once 'components/tools.php';
$settings = require_once 'components/settings.php';
 */

return array_merge($common, $dashboard);
