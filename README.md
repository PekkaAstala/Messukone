# Messukone
Web app for creating small printable parrot leaflets

I created this app for Lemmikkilinnut Kaijuli Ry, a nonprofit that aims to improve the treatment of pet birds. The organisation is present in all major pet related events in Finland (Lemmikkimessut, etc.), usually bringing a number of parrots with them.

There was a need for an easy way to create small printable leaflets (names, images, facts) of the birds so I hacked together this tool. It consists of:
* A folder of [parrot breed images](https://github.com/PekkaAstala/Messukone/blob/master/img/birds/linnut-neitokakadu.png) (Mostly created by Laure Kurkela)
* A [small JSON conf file](https://github.com/PekkaAstala/Messukone/blob/master/data.js) to map images to the names and scientific names of the parrot breeds
* [A WYSIWYG editor](https://github.com/PekkaAstala/Messukone/blob/master/editor-screenshot.png) for bird specific information
* A "Print" button and some AngularJS, Canvas and CSS magic to produce end results like [this](https://github.com/PekkaAstala/Messukone/blob/master/example-result.pdf)

Some pictures of the leaflets in use [here](https://www.flickr.com/photos/jtuutti/5631708544/in/album-72157626400253935/) and [here](https://www.flickr.com/photos/jtuutti/5631708068/in/album-72157626400253935/) in PetExpo 2011
