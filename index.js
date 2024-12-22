// 'O' is for available, 'X' is for unavailable
// Set all the seats available 
const theaterSeats = [
  ['O', 'O', 'O'],
  ['O', 'O', 'O'],
  ['O', 'O', 'O']
]

const seatsBooked = []

/* Book a seat : 
1) update the status in the 2D Array 
2) update the class in HTML to have the color change 
3) display all seats selected
*/
function bookSeat(row, col){
  if (theaterSeats[row][col] === 'O'){
    theaterSeats[row][col] = 'X';
    updateSeatColor(row,col);
    seatsBooked.push(`${String.fromCharCode(65 + row)}${col + 1}`)
    displaySelected(seatsBooked);
  } else {
    alert(`Seat ${String.fromCharCode(65 + row)}${col + 1} is unavailable`)
  }
}

// bookSeat() Helper function n°1
function updateSeatColor(row, col){
  const seats = document.getElementsByClassName('seat');
  const index = row * 3 + col;
  seats[index].classList.remove('available');
  seats[index].classList.add('unavailable');
}
// bookSeat() Helper function n°2
function displaySelected(seatsBooked){
  const text = document.getElementById('display')
  if (seatsBooked.length === 1) {
    text.innerText = `Seats Selected is : ${seatsBooked[0]}`
  } else {
    text.innerText = `Seats Selected are : ${seatsBooked}`
    
  }
}

/*
Book a random seat :
1) check available seats, by scanning the theatherSeats 2D array
2) book a random seat if available
3) update the 2D array status with bookSeat() function
*/
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

// bookRandomSeat() Helper function 
function checkAvailableSeats(availableSeats, theaterSeats){
  for (let row=0; row < theaterSeats.length; row++){
    for (let col = 0; col < theaterSeats[row].length; col++){
      if(theaterSeats[row][col]==='O'){
        availableSeats.push({row, col});
      }
    }
  }
}

