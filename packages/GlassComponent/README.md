# Welcome to Glasscomponentss
<img src="https://github.com/PedroGuilhermeFariaDuarte/ONEDEV/blob/main/examples/glass.png" width="650" height="300"/>

## Getting started

Hello devs!

This is the package with most beautiful components in glassmorphism for React app's.

## Pre-requisites

This package was written in Typescript, it is necessary that your environment has support for typescript code.


## Install

For install, execute in your terminal the code below:

```bash
    # using yarn
    yarn install
    # OR using npm
    npm install
```

## Using

All components in this package has a default component called *Container*, the container has some default properties, see below:

1. *cardWidth*
2. *cardHeight*
3. *cardRadius*
4. *cardColorBorder*
5. *cardBackground*
6. *cardGlass*
7. *cardPaddingAll*
8. *cardPaddingLeft*
9. *cardPaddingRight*
10. *cardPaddingTop*
11. *cardPaddingBottom*

### About default properties

All properties below are used for basical definition of component, like your width, height, border, border radius, padding's and most important the Glass effect and your level.

*Setting a component*: For setting a component should set the following properties **cardWidth**, **cardHeight**, **cardBackground**, **cardGlass**,  see below:

```js
    <InputGlass
        cardWidth={330}
        cardHeight={60}
        cardBackground="#f3f2f108"
        cardGlass={10}
    />
```

The cardWidth, cardHeight and cardGlass
receive a value of the *number*, started of 0 or 0.0. For last the cardBackground for definition the color of your component, it a string in hexadecimal with opacity.

The other properties we using for definition of aesthetic the component, see below:

- cardRadius: **For apply a radius in the component**

- cardColorBorder: **For apply a color in border of the component**

- cardPaddingAll: **For apply a internal spacing in all directions in the component**

- cardPaddingLeft: **For apply a internal spacing in left side in the component**
- cardPaddingRight: **For apply a internal spacing in right side in the component**

- cardPaddingTop: **For apply a internal spacing in top side in the component**

- cardPaddingBottom: **For apply a internal spacing in bottom side in the component**

## All components

Have following components in the actual version 1.1.0

1. Input
2. Box Message
3. Credit Card
4. Box Chat Message

**InputGlass component**

This component has the following properties:

- **inputPlaceholder** : The text of "description" of your input (**string**)

- **inputPlaceholderColor** : The color of descrition text (**string**)

- **buttonName**: The of button, like "click here" or "send" (**string**)

**BoxMessageGlass component**

This component has the following properties

- **boxMessageTitle** : The title of message (**string**)

- **boxMessageContent** : The message content (**string**)

- **boxMessageButtonColor** : The background color of button (**string**)

- **boxMessageButtonText** : The text of button (**string**)

- **boxMessageButtonTextColor**: The color of text button (**string**)

**BoxChatGlass component**

This component has the following properties

- **boxChatContent** : The content of message (**string**)

- **boxChatOnMe** : This propertie is mandatory  and it means if message is send for you(**true**) or no(**false**)

**CreditCardGlass component**

This component has the following properties

- **cardTitle** : The name of operator credit car, for example: Nubank and Visa (**string**)

- **cardNumber** : The number of credit card (**number**)

- **cardNamePersonal** : The personal name of user (**string**)

- **cardDateValid** : The valid date of credit card (**string**)

- **cardChipImage** : The chip image of credit card (**string | Data URI | Bin |any**)

# A Package created by a Brazilian for the world :D

### Help me translate to all languages and fix problems for current translation :).

### This package belongs to a monorepo, the monorepo was created by me is part of my series of challenges of my channel on [Twitch](https://www.twitch.tv/onedev_).

#### The aesthetic of package was inspired in following project [RH Agency](https://www.uplabs.com/posts/glassmorphism-header-concept).

**este pacote não possui quaisquer tipo de relação com a RH Agency e seus produtos, foi utilizado como inspiração visual alguns elemento como objetos 3d e cores apenas e não possui quaisquer objetivo comercial**.


**this package does not have any kind of relationship with the RH Agency and its products, was used as visual inspiration some element as 3d objects and colors only and has no commercial purpose**.

**See [The UpLicense: Store Licensing](https://www.uplabs.com/premium/license) for more details**.

[Github Monorepo](https://github.com/PedroGuilhermeFariaDuarte/ONEDEV)

[Glasscomponentss repository](https://github.com/PedroGuilhermeFariaDuarte/ONEDEV/tree/main/packages/GlassComponent)

## Licença:
<p xmlns:dct="http://purl.org/dc/terms/" xmlns:cc="http://creativecommons.org/ns#" class="license-text">
Esta obra está licenciada com uma Licença
<a rel="license" href="https://creativecommons.org/licenses/by-nc-nd/4.0">CC BY-NC-ND 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" /><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" /><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1" /><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nd.svg?ref=chooser-v1" /></a></p>
<p xmlns:dct="http://purl.org/dc/terms/" xmlns:cc="http://creativecommons.org/ns#" class="license-text">
This work is licensed with a License
<a rel="license" href="https://creativecommons.org/licenses/by-nc-nd/4.0">CC BY-NC-ND 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" /><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" /><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1" /><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nd.svg?ref=chooser-v1" /></a></p>
