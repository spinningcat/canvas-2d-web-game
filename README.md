# canvas-2d-web-game

It is 2d-webbased canvas game. Simply there is a worm that follows the mouse movement. Try not to die and try to eat items as much as it can eat to become bigger worm.

Something needs to be done for this game.

- Canvas playground. -> seems simple operation.
- Draw a worm. 
- Event for worm to follow muse "mouse move".
- Generate worm in random coordinates everytime user start the game.
- Generate items in random coordinates and avid any contratintion between worm and item.
- Detect 2d collision -> when worm eat items.
- Generate some other worms thats moves randomly. 
  * If a worm hit the other worm. He will be dead.
- Detect a worm hit the wall -> It is the another reason of worm's death.
- the worm curves because the tail segments follow the head. (issue)
- your head is at 0,0. the next frame, the head moves to 1,0 and you draw a tail segment at [0,0]. The next frame the head moves to 2,1 and you draw the tail segment at [1,0] (solution) need to maintain list of coordinates.
- he list length grows every time the head touches an apple. and when the list has more members, you draw more segments 
- Draw background.
![alt text](https://i.itsosticky.com/1g4ffxz.png)
![alt text](https://itsosticky.com/1ye9wj3)

problem is playground becomes invisible in times.



