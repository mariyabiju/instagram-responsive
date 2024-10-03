let count = 0;
function likefunctn() {
    // Toggle the count between 0 and 1
    count = count === 0 ? 1 : 0;
    var likeIcon = document.getElementById("likeid");
    // Update the counter text
    document.getElementById("like").textContent = count;
    // Toggle the button's background color
    if (count >= 1&&likeIcon.classList.contains("far")) {
        likeIcon.classList.remove("far");
        likeIcon.classList.add("fas");
        }
    else{
        likeIcon.classList.remove("fas");
        likeIcon.classList.add("far");
    }
} 

document.getElementById("commentline").addEventListener("input", comment);
document.getElementById("commentpost").addEventListener("click", postsubmit);

let number = 0;

function comment() {
    var commentInput = document.getElementById("commentline");
    var commentText = commentInput.value;

    // Show the post button when there is input
    if (commentText !== "") {
        document.getElementById("commentpost").style.display = "inline-block";
    } else {
        document.getElementById("commentpost").style.display = "none";
    }
}

function postsubmit() {
    number++; // Increment the comment count

    // Update the comment count display
    document.getElementById("commentnum").textContent = number;

    // Clear the input field and hide the post button
    document.getElementById("commentline").value = ""; 
    document.getElementById("commentpost").style.display = "none"; 
}


const stories = document.querySelectorAll('.story','.story1');
const popupContainer = document.getElementById('popup');
const closeButton = document.querySelector('#close-button');
const storyIframe = document.getElementById('story-iframe');

stories.forEach(story => {
  story.addEventListener('click', function() {
    // Reset all stories
    stories.forEach(otherStory => otherStory.classList.remove('active'));
    this.classList.add('active');
    popupContainer.style.display = 'block';
    storyIframe.src = this.getAttribute('href'); // Set the iframe source to the story link
  });
});
closeButton.addEventListener('click', () => {
  popupContainer.style.display = 'none';
  // Reset the active story if needed
  document.querySelector('.story.img.active').classList.remove('active').classList.add('closed');
  });



