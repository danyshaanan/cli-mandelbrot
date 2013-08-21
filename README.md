# cli-mandelbrot
#### A command line tool for viewing and moving inside the [Mandelbrot set](http://en.wikipedia.org/wiki/Mandelbrot_set).

* * *
### Installation
```bash
$ npm install -g cli-mandelbrot
```

* * *
### Usage

This package has no flags or options. Just type `cli-mandelbrot` and you are in:

![Example screen shot](https://raw.github.com/danyshaanan/cli-mandelbrot/master/doc/example1.png?raw=true)

Use the 'wasd' keys to move around, 'r' and 'f' to zoom in and out, 't' and 'f' to calculate more or less iterations, 'q' to toggle the help text, and 'o' to quit.

* * *
### TODOs

* Use last cached result to avoid recalculating most of the screen when moving with 'wasd'.
* Pre-calculate next assumed movement.

* * *

![Example screen shot](https://raw.github.com/danyshaanan/cli-mandelbrot/master/doc/example2.png?raw=true)
