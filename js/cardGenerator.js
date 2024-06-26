
// function createCards(listData) {
//     const container = document.createElement('div');
//     container.className = 'container';
//     const row = document.createElement('div');
//     row.className = 'row';
//     container.appendChild(row);
  
//     Object.keys(listData).forEach(key => {
//       const section = listData[key];
//       const col = document.createElement('div');
//       col.className = 'col-md-4';
//       const card = document.createElement('div');
//       card.className = 'card';
//       const cardBody = document.createElement('div');
//       cardBody.className = 'card-body';
  
//       const cardTitle = document.createElement('h5');
//       cardTitle.className = 'card-title';
//       cardTitle.textContent = section.headline;
  
//       const cardText = document.createElement('p');
//       cardText.className = 'card-text';
//       cardText.textContent = section.text;
  
//       cardBody.appendChild(cardTitle);
//       cardBody.appendChild(cardText);
//       card.appendChild(cardBody);
//       col.appendChild(card);
//       row.appendChild(col);
//     });
  
//     document.body.appendChild(container);
//   }
  
//   document.addEventListener('DOMContentLoaded', async () => {
//     const config = await loadConfig();
//     if (config.home && config.home.list_data) {
//       createCards(config.home.list_data);
//     }
//   });