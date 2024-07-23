async function isroApi() {
    try {
        // Show loader
        const loader = document.createElement("div");
        loader.className = "loader";
        document.body.appendChild(loader);

        // using fetch for getting data's in API
        const response = await fetch("https://isro.vercel.app/api/centres");
        const allData = await response.json();

        // Remove loader
        document.body.removeChild(loader);

        // Create table
        const tableDiv = document.querySelector(".table-responsive")
        const table = document.querySelector("table")
        const thead = document.createElement("thead");
        const tbody = document.createElement("tbody");
        table.appendChild(thead);
        table.appendChild(tbody);

        // Create table headers
        const headers = ["S.NO","Centre Name", "Location", "State"];
        const headerRow = document.createElement("tr");
        headers.forEach(headerText => {
            const th = document.createElement("th");
            th.textContent = headerText;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);

        // Populate table with data
        allData.centres.forEach(dataItem => {
            const row = document.createElement("tr");
            const cell1 = document.createElement("td");
            cell1.setAttribute("class","table-primary")
            cell1.textContent = dataItem.id;
            const cell2 = document.createElement("td");
            cell2.setAttribute("class","table-danger")
            cell2.textContent = dataItem.name;
            const cell3 = document.createElement("td");
            cell3.setAttribute("class","table-warning")
            cell3.textContent = dataItem.Place;
            const cell4 = document.createElement("td");
            cell4.setAttribute("class","table-success")
            cell4.textContent = dataItem.State;
            row.appendChild(cell1);
            row.appendChild(cell2);
            row.appendChild(cell3);
            row.appendChild(cell4);
            tbody.appendChild(row);
        });

        // Append table to the document body or any other container
        tableDiv.appendChild(table);

        // Fetch data for the second table
        const getResponse = await fetch("https://isro.vercel.app/api/customer_satellites");
        const allDatas = await getResponse.json();

        
        const tableDiv2 = document.createElement("div");
        tableDiv2.className = "table-responsive";
        const table2 = document.createElement("table");
        table2.className ="table table-dark table-hover"
        const thead2 = document.createElement("thead");
        const tbody2 = document.createElement("tbody");
        table2.appendChild(thead2);
        table2.appendChild(tbody2);

        // Create table headers for other customer satellites
        const headersTitle = ["Rockets", "Country Name", "Launch date", "Mass", "Launcher"];
        const headerRowElements = document.createElement("tr");
        headersTitle.forEach(headerText => {
            const th = document.createElement("th");
            th.textContent = headerText;
            headerRowElements.appendChild(th);
        });
        thead2.appendChild(headerRowElements);

        // Populate table with data for other customer satellites
        allDatas.customer_satellites.forEach(dataItem => {
            const row = document.createElement("tr");
            row.className="table table-success table-striped"
            const cell1 = document.createElement("td");
            cell1.textContent = dataItem.id;
            const cell2 = document.createElement("td");
            cell2.textContent = dataItem.country;
            const cell3 = document.createElement("td");
            cell3.textContent = dataItem.launch_date;
            const cell4 = document.createElement("td");
            cell4.textContent = dataItem.mass;
            const cell5 = document.createElement("td");
            cell5.textContent = dataItem.launcher;
            row.appendChild(cell1);
            row.appendChild(cell2);
            row.appendChild(cell3);
            row.appendChild(cell4);
            row.appendChild(cell5);
            tbody2.appendChild(row);
        });

        // Append table for other customer satellites to the second table container
        table2.appendChild(thead2);
        table2.appendChild(tbody2);
        tableDiv2.appendChild(table2);

        const secHead =document.querySelector(".sec-header")
        // Append second table container below the content of the first table
        secHead.insertAdjacentElement('afterend', tableDiv2);
        const getLaunchersResponse = await fetch("https://isro.vercel.app/api/launchers");
        const LauncherDatas = await getLaunchersResponse.json();
        
        const launcherDiv = document.querySelector(".container .card.h-100");
        
        LauncherDatas.launchers.forEach((launcher) => {
            // Create a new card element
            const card = document.createElement("div");
            card.classList.add("card-body");
            
            // Set the text content of the card to the launcher ID
            card.textContent = launcher.id;
            
            // Append the card to the launcherDiv
            launcherDiv.appendChild(card);
        });
        
        
        
        

    } catch (error) {
        console.error("Error", error);
    }
}

isroApi();