## Components

- App
  - state:
    - actions for buttons (increment mass, decrement mass, reset height)
    - text buttons
    - CharactersData[]
- CharacterCard <-- reactive
  - props: charactersData (see below);
- Button  
  - props: text button, action while it is being clicked

# Data
- text button
- action on click button: 
  - increment mass
  - decrement mass
  - reset height 

- charactersData[]
  - name: string
  - pictureUrl: string
  - height: string
  - mass: string
  - birth-year: string
