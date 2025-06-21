const searchBar = document.querySelector(".search-bar");

if (searchBar) {
  searchBar.addEventListener("focus", () => {
    searchBar.classList.add("focused");
  });

  searchBar.addEventListener("blur", () => {
    searchBar.classList.remove("focused");
  });
}

const bookCards = document.querySelectorAll(".book-card");

bookCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.classList.add("hovered");
  });

  card.addEventListener("mouseleave", () => {
    card.classList.remove("hovered");
  });
});

const categories = document.querySelectorAll(".category");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

categories.forEach((category) => {
  observer.observe(category);
});

document.addEventListener("DOMContentLoaded", () => {
  const categories = document.querySelectorAll(".category-card");

  function revealCategories() {
    const triggerBottom = window.innerHeight * 0.95;
    categories.forEach((card) => {
      const cardTop = card.getBoundingClientRect().top;
      if (cardTop < triggerBottom) {
        card.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", revealCategories);
  revealCategories();
});

const booksByCategory = {
  ficcao: [
    {
      img: "./src/assets/images/Ficção/51tAD6LyZ-L._AC_UY218_.jpg",
      title: "Ficção 1",
      author: "Autor A",
    },
    {
      img: "./src/assets/images/Ficção/61OXTAa9aHL._AC_UY218_.jpg",
      title: "Ficção 2",
      author: "Autor B",
    },
    {
      img: "./src/assets/images/Ficção/71Gmavgu3ZL._AC_UY218_.jpg",
      title: "Ficção 3",
      author: "Autor C",
    },
    {
      img: "./src/assets/images/Ficção/81-Hk3onFyL._AC_UY218_.jpg",
      title: "Ficção 4",
      author: "Autor D",
    },
    {
      img: "./src/assets/images/Ficção/817tAtf-0YL._AC_UY218_.jpg",
      title: "Ficção 5",
      author: "Autor E",
    },
  ],
  romance: [
    {
      img: "./src/assets/images/Romance/download_1.jpg",
      title: "Romance 1",
      author: "Autor A",
    },
    {
      img: "./src/assets/images/Romance/download_3.jpg",
      title: "Romance 2",
      author: "Autor B",
    },
    {
      img: "./src/assets/images/Romance/download_4.jpg",
      title: "Romance 3",
      author: "Autor C",
    },
    {
      img: "./src/assets/images/Romance/download.jpg",
      title: "Romance 4",
      author: "Autor D",
    },
    {
      img: "./src/assets/images/Romance/images_7.jpg",
      title: "Romance 5",
      author: "Autor E",
    },
  ],
  autoajuda: [
    {
      img: "./src/assets/images/AutoAjuda/51+hSdYJiwL._AC_UY218_.jpg",
      title: "Autoajuda 1",
      author: "Autor A",
    },
    {
      img: "./src/assets/images/AutoAjuda/61SMLKtN6YL._AC_UY218_.jpg",
      title: "Autoajuda 2",
      author: "Autor B",
    },
    {
      img: "./src/assets/images/AutoAjuda/71hoMGLd+CL._AC_UY218_.jpg",
      title: "Autoajuda 3",
      author: "Autor C",
    },
    {
      img: "./src/assets/images/AutoAjuda/71pZxQ3ABPL._AC_UY218_.jpg",
      title: "Autoajuda 4",
      author: "Autor D",
    },
    {
      img: "./src/assets/images/AutoAjuda/715Y9D5zNWL._AC_UY218_.jpg",
      title: "Autoajuda 5",
      author: "Autor E",
    },
  ],
  tecnologia: [
    {
      img: "./src/assets/images/livrosTecnologia/51aaETLBlfL._SY445_SX342_.jpg",
      title: "Tecnologia 1",
      author: "Autor A",
    },
    {
      img: "./src/assets/images/livrosTecnologia/71l0TYj1mpL._AC._SR360,460.jpg",
      title: "Tecnologia 2",
      author: "Autor B",
    },
    {
      img: "./src/assets/images/livrosTecnologia/71mouBDwxAL._AC._SR360,460.jpg",
      title: "Tecnologia 3",
      author: "Autor C",
    },
    {
      img: "./src/assets/images/livrosTecnologia/71Vkg7GfPFL._AC._SR360,460.jpg",
      title: "Tecnologia 4",
      author: "Autor D",
    },
    {
      img: "./src/assets/images/livrosTecnologia/71X7hMhMEUL._AC._SR360,460.jpg",
      title: "Tecnologia 5",
      author: "Autor E",
    },
  ],
  negocios: [
    {
      img: "./src/assets/images/Negocios/71ekCC1djwL._AC_UY218_.jpg",
      title: "Negócios 1",
      author: "Autor A",
    },
    {
      img: "./src/assets/images/Negocios/71HuZRl-XeL._AC_UY218_.jpg",
      title: "Negócios 2",
      author: "Autor B",
    },
    {
      img: "./src/assets/images/Negocios/81azm3rAm3L._AC_UY218_.jpg",
      title: "Negócios 3",
      author: "Autor C",
    },
    {
      img: "./src/assets/images/Negocios/81ehvI03NYS._AC_UY218_.jpg",
      title: "Negócios 4",
      author: "Autor D",
    },
    {
      img: "./src/assets/images/Negocios/713GIPU1lpL._AC_UY218_.jpg",
      title: "Negócios 5",
      author: "Autor E",
    },
  ],
  infantil: [
    {
      img: "./src/assets/images/Infantil/81detSzMJhL._AC_UY218_.jpg",
      title: "Infantil 1",
      author: "Autor A",
    },
    {
      img: "./src/assets/images/Infantil/81eu-VTWNLL._AC_UY218_.jpg",
      title: "Infantil 2",
      author: "Autor B",
    },
    {
      img: "./src/assets/images/Infantil/81H030y4WgL._AC_UY218_.jpg",
      title: "Infantil 3",
      author: "Autor C",
    },
    {
      img: "./src/assets/images/Infantil/81q19fLiMXL._AC_UY218_.jpg",
      title: "Infantil 4",
      author: "Autor D",
    },
    {
      img: "./src/assets/images/Infantil/91wTXgRW4ZL._AC_UY218_.jpg",
      title: "Infantil 5",
      author: "Autor E",
    },
  ],
  biografias: [
    {
      img: "./src/assets/images/BIografia/51PDs0RT7vL._AC_UY218_.jpg",
      title: "Biografias 1",
      author: "Autor A",
    },
    {
      img: "./src/assets/images/BIografia/71+22dgAZaL._AC_UY218_.jpg",
      title: "Biografias 2",
      author: "Autor B",
    },
    {
      img: "./src/assets/images/BIografia/81UZ-KioiZL._AC_UY218_.jpg",
      title: "Biografias 3",
      author: "Autor C",
    },
    {
      img: "./src/assets/images/BIografia/615c3rVH5ML._AC_UY218_.jpg",
      title: "Biografias 4",
      author: "Autor D",
    },
    {
      img: "./src/assets/images/BIografia/download_2.jpg",
      title: "Biografias 5",
      author: "Autor E",
    },
  ],
};

document.addEventListener("DOMContentLoaded", () => {
  const categories = document.querySelectorAll(".category-card");
  function revealCategories() {
    const triggerBottom = window.innerHeight * 0.95;
    categories.forEach((card) => {
      const cardTop = card.getBoundingClientRect().top;
      if (cardTop < triggerBottom) {
        card.classList.add("visible");
      }
    });
  }
  window.addEventListener("scroll", revealCategories);
  revealCategories();

  const categoryBooksDiv = document.querySelector(".category-books");
  categories.forEach((btn) => {
    btn.addEventListener("click", () => {
      const currentBooks = categoryBooksDiv.querySelectorAll(".book-card.visible");
      currentBooks.forEach((card) => card.classList.remove("visible"));
      setTimeout(() => {
        categoryBooksDiv.innerHTML = "";
        const cat = btn.getAttribute("data-category");
        if (booksByCategory[cat]) {
          booksByCategory[cat].forEach((book) => {
            const card = document.createElement("div");
            card.className = "book-card";
            card.innerHTML = `
              <img src="${book.img}" alt="${book.title}" />
              <h3>${book.title}</h3>
              <p>${book.author}</p>
            `;
            categoryBooksDiv.appendChild(card);
            setTimeout(() => card.classList.add("visible"), 10);
          });
        }
      }, 400);
    });
  });
});
