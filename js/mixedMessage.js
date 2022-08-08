// mixed message, created: 08.08.2022, Robin Schmidt

console.clear();


const verbs = ['Do', 'Get', 'Walk', 'Run', 'Leave', 'Buy', 'Set'];
const adj = ['crazy', 'unnecessary', 'stupid', 'big', 'small', 'great'];
const nouns = ['stuff', 'races', 'goals', 'steps'];
const punctuation = ['...', '?', '.', '!'];

const generateMessage = () => {
  if (verbs.length > 0 && adj.length > 0 &&
    nouns.length > 0 && punctuation.length > 0) {

    const mixedMessage = []
    mixedMessage.push(
      verbs[Math.floor(Math.random() * verbs.length)],      //[0].toUpperCase(), -->Versuch den ersten Buchstaben groß zumachen
      adj[Math.floor(Math.random() * adj.length)],
      nouns[Math.floor(Math.random() * nouns.length)],
      punctuation[Math.floor(Math.random() * punctuation.length)]
    );
    console.log(mixedMessage.join(' '));
  }
  else
    console.log('Done is better than perfect...');
};

generateMessage(); //logs array




