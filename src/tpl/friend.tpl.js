var friendSection = `

        <section  class="friend">
            <figure>
                <img src="<%= friend.photo %>" class="friend__avatar-small">
            </figure>
            <div>
                <h1 class="friend__name"><%= friend.name %></h1>
                <h2 class="friend__location"><%= friend.location %></h2>
                <h3 class="friend__online-status"><%= friend.status %></h3>
            </div>
        </section>
    `
export default friendSection;