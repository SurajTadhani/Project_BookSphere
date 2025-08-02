import React from 'react';

const About = () => {
  return (
    <div className=" p-4 py-28">
      <div className="text-center py-6">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-gray-700 text-lg dark:text-white">
          Welcome to Book Haven, your one-stop destination for all things books.
        </p>
      </div>

      <section className="py-6 container">
        <h2 className="text-3xl font-bold mb-3 dark:text-white">Our Mission</h2>
        <p className="text-gray-600 text-lg dark:text-white">
          At Book Haven, our mission is to foster a love for reading by providing a diverse selection of books for all ages and interests. We believe that books have the power to inspire, educate, and entertain, and we strive to make reading accessible and enjoyable for everyone.
        </p>
      </section>

      <section className="py-6 container">
        <h2 className="text-3xl font-bold mb-3 dark:text-white">Our History</h2>
        <p className="text-gray-600 text-lg dark:text-white">
          Founded in 2010, Book Haven started as a small neighborhood bookstore with a simple goal: to share our passion for books with the community. Over the years, we have grown into a beloved destination for book lovers, offering a carefully curated selection of books across various genres, as well as hosting events and book clubs to bring readers together.
        </p>
      </section>

      <section className="py-6 container">
        <h2 className="text-3xl font-bold mb-3 dark:text-white">Our Team</h2>
        <p className="text-gray-600 text-lg dark:text-white">
          Our team is composed of avid readers and book enthusiasts who are dedicated to providing excellent customer service and helping you find the perfect book. Whether you’re looking for the latest bestseller, a classic novel, or a hidden gem, our knowledgeable staff is here to assist you.
        </p>
      </section>

      <section className="py-6 container">
        <h2 className="text-3xl font-bold mb-3 dark:text-white">Join Our Community</h2>
        <p className="text-gray-600 text-lg dark:text-white">
          We invite you to join our community of readers. Follow us on social media, sign up for our newsletter, and attend our events to stay connected and discover new books and authors. Thank you for supporting Book Haven and being a part of our story.
        </p>
      </section>
    </div>
  );
};

export default About;
