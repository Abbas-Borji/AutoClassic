# Auto Classic
Welcome to the Auto Classic repository! Auto Classic is a website for a Swedish Automobile Workshop that has been developed using Angular 14, Bootstrap 5, and TypeScript 4.8. This is a single-page website that is optimized for both desktop and mobile devices, making it easy to use and accessible to a wide range of users. Additionally, the backend of this web application is connected to a Google Sheet for simplicity and ease of use.

### Main Components
The website consists of 5 main components: header, footer, home, our-services, and contact. The header component contains a collapsible navbar and is available on each page. Moreover, the footer component contains details about the business, including social media links, phone number link, work schedule and is also available on each page.

### Hosted Version
[Visit Auto Classic](https://autoclassic.se/)

### Design
The website's user-friendly interface and eye-catching visuals were designed using canva. You can view the designs for each page of the website using the following links:

1- Home Page: https://www.canva.com/design/DAFM4ovKQzo/NPfarxtv-yuDKKB4cupwjg/view?website#2:book-now

2- Our Services Page: https://www.canva.com/design/DAFNigt6GG4/IYydsOsuY78bvJCaQfO8sQ/view?website#2:contact

3- Contact Page: https://www.canva.com/design/DAFNindIJEM/-m-KpYub_T013PPkKumUQw/view?website#2:contact

### Note
It is important to note that the below three components are meant to replace each other based on the user's selection from the navbar. The navbar is described as containing three options: Home, Our Services, and Contact. Depending on the option selected by the user, the corresponding component will be displayed in the main area of the application, allowing users to easily navigate and access the information they are looking for.

### Home
![alt text](https://github.com/Abbas-Borji/AutoClassic/blob/main/Screenshots/1.png?raw=true)

The home component is the default component that is displayed when the application is first loaded. This component is located between the header and footer of the application and includes several sections (sub-components), such as a hero, counter, brands, testimonials, about us, and slogan.

### Our Services
![alt text](https://github.com/Abbas-Borji/AutoClassic/blob/main/Screenshots/5.png?raw=true)

The our-services component, on the other hand, contains a hero, services, and slogan sections. This component is specifically designed to provide information about the services offered by the automobile workshop.

### Contact
![alt text](https://github.com/Abbas-Borji/AutoClassic/blob/main/Screenshots/8.png?raw=true)

Finally, the contact component provides users with a convenient way to get in touch with the workshop and access its location information. The hero section of the contact component features an embedded Google Map that accurately displays the workshop's location, making it easy for users to find the physical address and get directions to it. The form section allows users to submit their queries and requests for information or support. These responses are then stored in a Google Sheet for easy management and retrieval.

### Google Sheet Script
The script is a server-side solution that connects the backend of the Auto Classic web application to a Google Sheet. The script utilizes the Google Apps Script platform to interact with the Google Sheet and store data in it, making it a simple and easy-to-use solution for storing and retrieving data.

The script functions as follows:

1- The script is triggered by a user action, such as submitting a form on the contact page.

2- The user data is collected and stored in an object, which is then passed to the script as an argument.

3- The script opens the specified Google Sheet and appends the user data to the next available row.

4- The script returns a response to the web application, indicating whether the data was successfully stored in the Google Sheet or not.

The Google Sheet script provides a flexible and scalable solution for storing user data from the web application.
