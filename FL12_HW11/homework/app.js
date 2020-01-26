const structure = [
  {
    folder: true,
    title: 'Films',
    children: [
      {
        title: 'Iron Man.avi'
      },
      {
        folder: true,
        title: 'Fantasy',
        children: [
          {
            title: 'The Lord of the Rings.avi'
          },
          {
            folder: true,
            title: 'New folder 1',
            children: false
          }
        ]
      }
    ]
  },
  {
    folder: true,
    title: 'Documents',
    children: [
      {
        folder: true,
        title: 'EPAM Homework answers',
        children: null
      }
    ]
  }
];

const rootNode = document.getElementById('root');

let films = document.createElement('div');
let filmText = document.createTextNode(structure[0].title);

let documents = document.createElement('div');
let documentsText = document.createTextNode(structure[1].title);

films.appendChild(filmText);
documents.appendChild(documentsText);

document.body.appendChild(films);
document.body.appendChild(documents);
