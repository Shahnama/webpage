  const people = {
    1 : { 
        name: "Alex", 
        image: "https://via.placeholder.com/150",
        comments: [
            {
                id: 1,
                "comments" : "Great collaborator!",
            }, {
                id: 1,
                "comments" : "Loves espresso.",
            },
                ]
    },
    2 : { 
        name: "Jordan", 
        image: "https://via.placeholder.com/150",
        comments: [
            {
                id: 1,
                "comments" : "Great collaborator!",
            }, {
                id: 1,
                "comments" : "Loves espresso.",
            },
                ]
    },
    3 : { 
        name: "Casey", 
        image: "https://via.placeholder.com/150",
        comments: [
            {
                id: 1,
                "comments" : "Great collaborator!",
            }, {
                id: 1,
                "comments" : "Loves espresso.",
            },
                ]
    },
    4 : { 
        name: "Taylor", 
        image: "https://via.placeholder.com/150",
        comments: [
            {
                id: 1,
                "comments" : "Great collaborator!",
            }, {
                id: 1,
                "comments" : "Loves espresso.",
            },
                ]
    },
    5 : { 
        name: "Jamie", 
        image: "https://via.placeholder.com/150",
        comments: [
            {
                id: 1,
                "comments" : "Great collaborator!",
            }, {
                id: 1,
                "comments" : "Loves espresso.",
            },
                ]
    },
    6 : { 
        name: "Morgan", 
        image: "https://via.placeholder.com/150",
        comments: [
            {
                id: 1,
                "comments" : "Great collaborator!",
            }, {
                id: 1,
                "comments" : "Loves espresso.",
            },
                ]
    },

    // Add other people similarly
  };

  // Sample pairings data
const pairings = {
    "January": [
      { pair: [1,2] },
      { pair: [3,4] },
      { pair: [5,6] },
    ],
    "February": [
        { pair: [2,3] },
        { pair: [4,5] },
        { pair: [6,1] },
    ],
    "March": [
        { pair: [3,5] },
        { pair: [2,6] },
        { pair: [1,4] },
    ]
  };

  module.exports = { people, pairings };