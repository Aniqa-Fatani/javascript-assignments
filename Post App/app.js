var selectedSwatch = "terracotta";
var currentUser = null;

var posts = [
    {
        id: 101,
        author: "@studio_note",
        title: "Morning Study Routine",
        description: "Reviewed core JavaScript functions, array methods, and clean UI structure before starting today's build.",
        theme: "sage",
        date: formatTodayDate()
    },
    {
        id: 102,
        author: "@vespera_team",
        title: "Color Contrast Check",
        description: "Switched to warm terracotta and sage accents over deep slate surfaces for comfortable reading.",
        theme: "terracotta",
        date: formatTodayDate()
    }
];

function formatTodayDate() {
    var now = new Date();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var year = now.getFullYear();
    return month + "/" + day + "/" + year;
}

function getThemeClass(themeName) {
    switch (themeName) {
        case "sage":
            return "theme-sage";
        case "ochre":
            return "theme-ochre";
        case "slate":
            return "theme-slate";
        case "plum":
            return "theme-plum";
        default:
            return "theme-terracotta";
    }
}

function switchView(viewName) {
    var views = document.querySelectorAll(".view");
    for (var i = 0; i < views.length; i++) {
        views[i].classList.remove("active");
    }

    var navBtns = document.querySelectorAll(".nav-btn");
    for (var j = 0; j < navBtns.length; j++) {
        navBtns[j].classList.remove("active");
    }

    document.getElementById("view-" + viewName).classList.add("active");
    document.getElementById("nav-" + viewName).classList.add("active");

    if (viewName === "feed") {
        renderPosts();
    }
}

function selectSwatch(themeName, btnElement) {
    selectedSwatch = themeName;
    var swatches = document.querySelectorAll(".swatch");
    for (var i = 0; i < swatches.length; i++) {
        swatches[i].classList.remove("selected");
    }
    btnElement.classList.add("selected");
}

function handlePostSubmit(event) {
    event.preventDefault();

    var titleInput = document.getElementById("post-title").value.trim();
    var descInput = document.getElementById("post-desc").value.trim();
    var editIdInput = document.getElementById("edit-post-id").value;

    if (!titleInput || !descInput) {
        return;
    }

    var authorLabel = currentUser ? "@" + currentUser.username : "@guest";

    if (editIdInput !== "") {
        var targetId = Number(editIdInput);
        for (var i = 0; i < posts.length; i++) {
            if (posts[i].id === targetId) {
                posts[i].title = titleInput;
                posts[i].description = descInput;
                posts[i].theme = selectedSwatch;
                break;
            }
        }
    } else {
        var newPost = {
            id: Math.floor(Math.random() * 900000) + 100000,
            author: authorLabel,
            title: titleInput,
            description: descInput,
            theme: selectedSwatch,
            date: formatTodayDate()
        };
        posts.unshift(newPost);
    }

    cancelPostForm();
    switchView("feed");
}

function startEditPost(postId) {
    for (var i = 0; i < posts.length; i++) {
        if (posts[i].id === postId) {
            document.getElementById("edit-post-id").value = posts[i].id;
            document.getElementById("post-title").value = posts[i].title;
            document.getElementById("post-desc").value = posts[i].description;
            document.getElementById("form-title").innerText = "Edit Post";
            document.getElementById("submit-post-btn").innerText = "Save Changes";

            selectedSwatch = posts[i].theme;
            var swatches = document.querySelectorAll(".swatch");
            for (var s = 0; s < swatches.length; s++) {
                swatches[s].classList.remove("selected");
                if (swatches[s].getAttribute("data-theme") === selectedSwatch) {
                    swatches[s].classList.add("selected");
                }
            }

            switchView("create");
            break;
        }
    }
}

function deletePost(postId) {
    var updated = [];
    for (var i = 0; i < posts.length; i++) {
        if (posts[i].id !== postId) {
            updated.push(posts[i]);
        }
    }
    posts = updated;
    renderPosts();
}

function cancelPostForm() {
    document.getElementById("post-form").reset();
    document.getElementById("edit-post-id").value = "";
    document.getElementById("form-title").innerText = "Create a Post";
    document.getElementById("submit-post-btn").innerText = "Post";

    selectedSwatch = "terracotta";
    var swatches = document.querySelectorAll(".swatch");
    for (var i = 0; i < swatches.length; i++) {
        swatches[i].classList.remove("selected");
        if (swatches[i].getAttribute("data-theme") === "terracotta") {
            swatches[i].classList.add("selected");
        }
    }

    switchView("feed");
}

function renderPosts() {
    var listEl = document.getElementById("posts-list");
    var countEl = document.getElementById("post-count");
    listEl.innerHTML = "";
    countEl.innerText = posts.length + (posts.length === 1 ? " Post" : " Posts");

    if (posts.length === 0) {
        listEl.innerHTML = "<div class='panel'><p>No posts yet. Click + Post to share something.</p></div>";
        return;
    }

    for (var i = 0; i < posts.length; i++) {
        var item = posts[i];
        var card = document.createElement("article");
        card.className = "post-card " + getThemeClass(item.theme);

        card.innerHTML =
            "<div class='post-top'>" +
                "<span class='author-tag'>" + item.author + "</span>" +
                "<span class='post-date'>" + item.date + "</span>" +
            "</div>" +
            "<h3 class='post-title'>" + item.title + "</h3>" +
            "<p class='post-desc'>" + item.description + "</p>" +
            "<div class='post-actions'>" +
                "<button type='button' class='btn-edit' onclick='startEditPost(" + item.id + ")'>Edit</button>" +
                "<button type='button' class='btn-delete' onclick='deletePost(" + item.id + ")'>Delete</button>" +
            "</div>";

        listEl.appendChild(card);
    }
}

function switchAuthTab(tab) {
    var signupForm = document.getElementById("signup-form");
    var loginForm = document.getElementById("login-form");
    var tabSignup = document.getElementById("tab-signup");
    var tabLogin = document.getElementById("tab-login");
    var msgEl = document.getElementById("auth-message");

    msgEl.innerText = "";

    if (tab === "signup") {
        signupForm.style.display = "block";
        loginForm.style.display = "none";
        tabSignup.classList.add("active");
        tabLogin.classList.remove("active");
    } else {
        signupForm.style.display = "none";
        loginForm.style.display = "block";
        tabLogin.classList.add("active");
        tabSignup.classList.remove("active");
    }
}

function handleSignup(event) {
    event.preventDefault();
    var username = document.getElementById("su-username").value.trim().toLowerCase();
    var email = document.getElementById("su-email").value.trim();

    currentUser = {
        username: username,
        email: email
    };

    showMemberCard();
    document.getElementById("auth-message").innerText = "Account created and signed in.";
    document.getElementById("signup-form").reset();
}

function handleLogin(event) {
    event.preventDefault();
    var email = document.getElementById("li-email").value.trim();
    var namePart = email.indexOf("@") > 0 ? email.slice(0, email.indexOf("@")) : "member";

    currentUser = {
        username: namePart,
        email: email
    };

    showMemberCard();
    document.getElementById("auth-message").innerText = "Signed in successfully.";
    document.getElementById("login-form").reset();
}

function showMemberCard() {
    if (!currentUser) return;
    var badgeCard = document.getElementById("member-badge-card");
    document.getElementById("member-name").innerText = currentUser.username.toUpperCase();
    document.getElementById("member-email").innerText = currentUser.email;
    document.getElementById("member-handle").innerText = "@" + currentUser.username;
    badgeCard.style.display = "block";
}

function logoutMember() {
    currentUser = null;
    document.getElementById("member-badge-card").style.display = "none";
    document.getElementById("auth-message").innerText = "Signed out.";
}

document.getElementById("feed-date").innerText = "Today • " + formatTodayDate();
renderPosts();