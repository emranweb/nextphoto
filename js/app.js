//Iterators
function photoIterator(arr) {
  let nextIndex = 0;
  return {
    //iterator return a next object
    next: function () {
      return nextIndex < arr.length ? {
        //return object return value and done
        value: arr[nextIndex++],
        done: false
      } : {
        done: true,
      }
    }
  }

}


//add data in the function
const profileItem = photoIterator(data);
//default data when windows load
photo()

//cleat an event listeer to the next button
document.querySelector(".btn").addEventListener("click", photo);

// proflie d
function photo() {
  const current = profileItem.next().value;

  const img = document.querySelector("img");

  if (current === undefined) {
    window.location.reload();
  } else {
    img.setAttribute("src", `${current.url}`);
  }

}