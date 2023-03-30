import React from 'react'
import './Capstone.css'


function Capstone() {
  return (
    <div className='contain'>


        <div className='info'>
            <h1>Summary</h1>
            <p>An understanding of recognizing risks and amending them by applying mitigations for user authentication is appropriately necessary within any business. This research is conducted to regard how user impersonation works and be applied within an industry user login interface. This researched-based project identifies a policy for user authentication, recognizing risks and mitigations for a private company that specializes in an online agreements platform. As technology progresses, hackers can gain access to a victim’s account and extract sensitive information from the targeted victim. Therefore, the project includes developing a mockup web application using the necessary languages such as HTML, CSS, Python, PHP and SQL. Hence, surrounds the proof of concepts needed to perform basic attacks around user impersonation which strongly adheres to attacks known as Phishing attacks and SQL injection. </p>

            <h1>Front-End Techniques</h1>
            <ul>
                <h2>Visual Studio Code</h2>
                <ul>
                    <li>HTML - HyperText Markup Language, is a computer language that makes up most web pages and online applications. A hypertext is a text that is used to reference other pieces of text, while a markup language is a series of markings that tells web servers the style and structure of a document. We used this to create and structure sections, paragraphs, and links using elements, tags, and attributes. The end product resulted in an interactive sign-in page, a user creation page, and a final logged-in page.  </li>
                    <li>CSS - Cascading Style Sheets are used to define styles for our web pages, including the design, layout, and variations in display for different devices and screen sizes. This helped in the design of creating our phishing attack to replicate the industry’s online web application.  </li>
                    <li>Flash – Flash is one of the module libraries of FLASK that allows certain aesthetic styles to be flashed on the screen. This informs the user about what the application is currently doing. For example, if the user clicked the button without putting anything in the form an error text will pop up to let the user know that an input is needed to submit the form. </li>

                </ul>
            </ul>
            <h1>Back-End Techniques</h1>
            <ul>
                <li>PHP - Hypertext Preprocessor is known as a general-purpose scripting language that can be used to develop dynamic and interactive websites. We used this to make our web pages interactive to when a user inputs that it would be redirected to phpMyAdmin, making the person see the results of what that user inputted.  </li>
                <li>SQL - Used to communicate with a database along with performing tasks such as updating data on a database or retrieving data from a database.  </li>
                <li>Python – This programming language allowed us to manually code the web application Program. </li>
                <li>Flask – Flask is a flexible web framework that was developed in Python. This allowed us to code the program with no difficulty. Hence, made the web application interactive by routing the python function using a ‘POST’ method into its respective HTML sources.  </li>
                <li>phpMyAdmin – This granted us permission to create, alter and access database entries. Using this allowed us to see a visiting users input on the demonstration web application.  </li>
                <li>XAMPP – Is a local host or server tool that is used to test clients or websites before publishing them to a remote web server. We used Apache and MySQL to run the services which allowed us to run projects on the localhost to test how our SQL, PHP, and HTML files work in response to each other.  </li>
                <li>Ngrok - Cross-platform application that exposes local server ports to the Internet. We used this to generate a link from our local host to the internet via a link. This exposed users to view our website and interact with it.  </li>
                <li>Sqlite3 – This SQL database engine allowed us to create the back-end database into our local-host machine. Thus, it enabled us to access or modify the database using the sqlite3 interface through the command prompt. </li>
            </ul>
            <h1>Lesson's Learned & Future Improvement</h1>
            <p>Our time working with the industry has enhanced our knowledge of various attack vectors and learned how to mitigate them. Conducting our research and implementation of our proof of concepts has further developed our skills in the languages surrounding HTML, CSS, SQL, Python and PHP. We also learned the basics of front-end and back-end web development which we could implement in our future career choices surrounding security and full-stack web developers. </p>
            <p>For future improvements, it is disappointing to say that working with industry seemed very poorly planned. The project was very unorganized, to say the least since we did not get a proper project scope till two months into the project, that was time that could have been spent working towards implementing what could have been done from that start. There were also some communication problems where they missed a meeting, and we did not receive proper feedback on the submission of both risks and mitigations upon asking multiple times. Although, accomplishing multiple tasks and learning new things we learned that it is possible to achieve great things in a short amount of time. The journey of understanding new materials in a time constraint manner has taught us proper time management and allowing us to be more adaptable and flexible when faced with multiple challenges.      </p>
    


            <div class="ratio">
            <iframe width="500" height="300" src="https://www.youtube.com/embed/HGL1hpBxeik" title="SQL Injection" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

            <iframe width="500" height="300" src="https://www.youtube.com/embed/6AzzaMHp_z4" title="Phishing Attack Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
        </div>

    </div>

  )
}

export default Capstone
