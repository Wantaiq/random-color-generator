# Create application that will return a random color in the command line.

It should work like this :

- When the program is run without any input, a block with a random color will be printed.

```bash
$ node index.js

  ################################
  ################################
  ################################
  ####                        ####
  ####        #957d5b         ####
  ####                        ####
  ################################
  ################################
  ################################
```

- When the user inputs a hue and saturation request, a block with that color will be printed.

```bash
$node index.js light red

  ################################
  ################################
  ################################
  ####                        ####
  ####        #FF7F7F         ####
  ####                        ####
  ################################
  ################################
  ################################

```

- When the user inputs "ask", it will start the prompt in which user can choose a color and the saturation of the color.

```bash
$node index.js ask

? Choose a color …
▸ red
  green
  blue

? Would you like your color to be dark or light? …
▸ light
  dark

  ################################
  ################################
  ################################
  ####                        ####
  ####        #FF7F7F         ####
  ####                        ####
  ################################
  ################################
  ################################

```
