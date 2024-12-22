const theaterSeats = [
  ['O', 'O', 'O'],
  ['O', 'O', 'O'],
  ['O', 'O', 'O']
]

const seatsBooked = []

function updateSeatStatus(row, col, status){
  const seats = document.getElementsByClassName('seat');
  const index = row * 3 + col;
  seats[index].classList.remove('available');
  seats[index].classList.add(status);
}

function displaySelected(seatsBooked){
  const text = document.getElementById('display')
  if (seatsBooked.length === 1) {
    text.innerText = `Seats Selected is : ${seatsBooked[0]}`
  } else {
    text.innerText = `Seats Selected are : ${seatsBooked}`
    
  }
}

function bookSeat(row, col){
  if (theaterSeats[row][col] === 'O'){
    theaterSeats[row][col] = 'X';
    updateSeatStatus(row,col,'unavailable');
    seatsBooked.push(`${String.fromCharCode(65 + row)}${col + 1}`)
    displaySelected(seatsBooked);
  } else {
    alert(`Seat ${String.fromCharCode(65 + row)}${col + 1} is unavailable`)
  }
}


function checkAvailableSeats(availableSeats, theaterSeats){
  for (let row=0; row < theaterSeats.length; row++){
    for (let col = 0; col < theaterSeats[row].length; col++){
      if(theaterSeats[row][col]==='O'){
        availableSeats.push({row, col});
      }
    }
  }
}

function bookRandomSeat(){
  const availableSeats = [];
  checkAvailableSeats(availableSeats, theaterSeats);
  if (availableSeats.length > 0) {
    const randomIndex = Math.floor(Math.random() * availableSeats.length);
    const {row, col} = availableSeats[randomIndex];
    bookSeat(row, col);
  } else {
    alert('All seats are already booked')
  }
}