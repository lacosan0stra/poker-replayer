
# Poker Replayer with Ranges 

## User Stories 

```
As a Poker player 
So that I can replay my hands 
I want to enter the hands in a replayer 
```

```
As a Poker player 
So that I can get more insights into a poker play 
I want to allocate hand ranges to each decision taken throughout the hand 
```

```
As a Poker player 
So that I can review poker plays later 
I want to save the games with the allocated ranges 
```



## Technology 

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You can find the recent version of the Create React App [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).


### Installing

In order to install the React dependencies, the following commands need to be run on Terminal : 

```
npm install 
 
```

And then run the app with : 

```
npm run start
```


## Work in progress. MVP stage  

Currently, we have : 

- a chart with 52 cards that can be selected 
- The selected cards are displayed on the board
- A select field drop down shows you which street you are playing
- You can click on each players' decisions : check/bet/fold...etc. 
- The decisions are displayed alongside the chart 

Missing : 

- Testing React
- Redux for state management 
- A solution for permanent data (as we need to save the hands)
- Add hand ranges to each decision
- An algorithm to find what poker hand you have 
