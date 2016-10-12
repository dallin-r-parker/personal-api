

var user = {

    name: 'Dallin',
    location: 'Vineyard',
    occupations: ['developer'],
    hobbies: [
      {
        name: 'hiking',
        type: 'outdoors'
      },
      {
        name: 'travel',
        type: 'exploring'
      },
      {
        name: 'learning',
        type: 'school'
      }
    ],
    family: [
      {
        name: 'Mikayda',
        relation: 'Wife',
        gender: 'Female'
      },
      {
        name: 'Scott',
        relation: 'Father',
        gender: 'Male'
      },{
        name: 'Jan',
        relation: 'Mother',
        gender: 'Female'
      }
    ],
    restaurants: [
      {
        name: 'Cafe Rio',
        type: 'Mexican',
        rating: 10
      },
      {
        name: 'Wendy\'s',
        type: 'American',
        rating: 8
      },
      {
        name: 'Panda Express',
        type: 'Chinese',
        rating: 7
      }
    ];
}


module.exports = user; // <-- this makes the file accesible in other files
