const loadLesson = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((response) => response.json())
    .then((json) => displayLesson(json.data));
};

const loadLevelWord = (id) => {
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  //   console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayLevelWord(data.data));
};

const displayLevelWord = (words) => {
  //   console.log(words);
  const wordContainer = document.getElementById("word-container");
  wordContainer.innerHTML = "";

  words.forEach((word) => {
    // console.log(word);

    const card = document.createElement("div");
    card.innerHTML = `
       <p>Cat</p>
    `;
    wordContainer.append(card);
  });
};

const displayLesson = (lessons) => {
  // console.log(lessons);

  // get the container and empty
  const levelContainer = document.getElementById("level-container");
  levelContainer.innerHTML = "";

  // get into every lessons
  for (let lesson of lessons) {
    // create Element
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
       <button onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary">
            <i class="fa-solid fa-book-open"></i> Lesson-${lesson.level_no}
        </button>
    `;

    // append into container
    levelContainer.append(btnDiv);
  }
};

loadLesson();
