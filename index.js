const theaterSeats = [
  ['O', 'O', 'O'],
  ['O', 'O', 'O'],
  ['O', 'O', 'O']
]

function checkAvailableSeats(){
  const availableSeats = [];
  for (let row=0; row < theaterSeats.length; row++){
    for (let col = 0; col < theaterSeats[row].length; col++){
      if(theaterSeats[row][col]==='O'){
        availableSeats.push({row, col});
      }
    }
  }
  console.log(availableSeats);
}

function updateSeatStatus(row, col, status){
  const seats = document.getElementsByClassName('seat');
  const index = row * 3 + col;
  seats[index].classList.remove('available');
  seats[index].classList.add(status);
}

function displaySelected(seatsBooked){
  const text = document.getElementById('display')
  if (seatsBooked.lenght === 1) {
    text.innerText = `Seats Selected is : `
  }
}



function bookSeat(row, col){
  if (theaterSeats[row][col] === 'O'){
    theaterSeats[row][col] = 'X';
    updateSeatStatus(row,col,'unavailable');
    alert(`Seat ${String.fromCharCode(65 + row)}${col + 1} is booked`)
  } else {
    alert(`Seat ${String.fromCharCode(65 + row)}${col + 1} is unavailable`)
  }
}

function bookRandomSeat(){
  checkAvailableSeats();
  const availableSeats = [];
  for (let row=0; row < theaterSeats.length; row++){
    for (let col = 0; col < theaterSeats[row].length; col++){
      if(theaterSeats[row][col]==='O'){
        availableSeats.push({row, col});
      }
    }
  }
  if (availableSeats.length > 0) {
    const randomIndex = Math.floor(Math.random() * availableSeats.length);
    const {row, col} = availableSeats[randomIndex];
    bookSeat(row, col);
  } else {
    alert('All seats are already booked')
  }
}