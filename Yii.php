<?php

/*
 * This file is part of the plusarchive.com
 *
 * (c) Tomoki Morita <tmsongbooks215@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

class Yii extends \yii\BaseYii
{
    /**
     * @var BaseApplication|WebApplication|ConsoleApplication
     */
    public static $app;
}

spl_autoload_register(['Yii', 'autoload'], true, true);
Yii::$classMap = require __DIR__.'/vendor/yiisoft/yii2/classes.php';
Yii::$container = new yii\di\Container;

/**
 *
 */
abstract class BaseApplication extends yii\base\Application
{
}

/**
 * @property \app\components\Formatter $formatter
 * @method \app\components\Formatter getFormatter()
 */
class WebApplication extends yii\web\Application
{
}

/**
 *
 */
class ConsoleApplication extends yii\console\Application
{
}
