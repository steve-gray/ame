# ame - angular-made-easy
### Angular 2, for humans.
[![Travis-CI Build](https://travis-ci.org/steve-gray/ame.svg?branch=master)](https://travis-ci.org/steve-gray/ame)
[![Prod Dependencies](https://david-dm.org/steve-gray/ame/status.svg)](https://david-dm.org/steve-gray/ame)
[![Dev Dependencies](https://david-dm.org/steve-gray/ame/dev-status.svg)](https://david-dm.org/steve-gray/ame#info=devDependencies)
[![npm version](https://badge.fury.io/js/ame.svg)](https://badge.fury.io/js/ame)

[![Stats](https://nodei.co/npm/ame.png?downloads=true&downloadRank=true&stars=true)](https://npmjs.com/package/ame)
[![Downloads](https://nodei.co/npm-dl/ame.png?height=2)](https://npmjs.com/package/ame)


## Why does this exist?
Angular 2 is great in a whole range of ways, but the _minimal_ examples out there
are typically a dozen or more files and require developers to understand and combine many
seperate elements in order to get even the most basic of examples working.

This package is intended to be a cross-browser compatible, simplified distribution of
Angular 2 and all commonly required dependencies and soften the learning curve.

## Version Tracking
I will try to maintain as close as possible a version parity with Angular 2. My
repository is tracked by the awesome [greenkeeper](http://greenkeeper.io) for
dependencies, so in theory you'll never be more than a few days out. As this project
does not modify any of the dependencies other than concatenating them, it means that you're
able to switch seamlessly away from this library when you're ready.

## Efficiency vs Simplicity
Yes. Including all of the components by default isn't 100% efficient. In fact the
ame.min.js file is a whopping __970__KB or so at last check. However, when served
from a server with GZip compression support this drops to circa ~205KB, which is
very easy to deal with for most scenarios.

In short, whilst you can make this more efficient by slotting in extra stuff like
SystemJS or other components, the benefits are sufficiently nominal that this project.
When you are ready to make that transition for your app, I fully encourage you to do so.

## Version Choice
The files in /dist are:

  - ame.js (Full/uncompressed versions) - __2.7MB__
  - ame.dev.js (Dev versions of components) - __ 6MB__
  - ame.min.js (Minified versions of code, combined) - __1MB__ (__200KB GZip__)

Approximately 80-85% compression on suitable servers makes these
sizes less problematic when starting out on your app development.

## What's in the Bundle
The dependencies below are included in the bundling:

  - Core JS (Client Shims)
  - Zone.js
  - Reflect-Metadata
  - RxJS (Reactive Extensions)
  - Angular 2 Polyfills
  - Angular 2 (All Components)

## A Real, Minimal Example
Examples are found in the Git Repository for this project under
/examples - but here's a simplified version:

    <html>
    <head>
        <title>Angular 2 QuickStart JS</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- 1. Load libraries -->
        <script src='../../../dist/ame.min.js'></script>

        <!-- 2. Load our 'modules' -->
        <script src='app/app.component.js'></script>
        <script src='app/main.js'></script>
    </head>
    <!-- 3. Display the application -->
    <body>
        <my-app>Loading...</my-app>
    </body>
    </html>

Where the path in (1) is your path to the ame file you wish to include.

## Serving this Content
I'd recommend using a simple middleware setup (connect-mount/serve-static) in order to
expose the ./node_modules/ame/dist/ folder on a suitable path inside your application.

