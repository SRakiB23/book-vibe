const AboutUs = () => {
  return (
    <div>
      <div className="text-center text-4xl pt-4 font-bold">
        <h2>Welcome to Books Valley</h2>
      </div>
      <p className="p-4 text-center font-medium">
        Welcome to our books valley website, a heaven for book lovers of all
        ages and interests. Dive into a world where imagination knows no bounds,
        and stories come alive with every turn of the page. Whether you're a
        seasoned bibliophile or just discovering the joy of reading, our
        platform offers a vast collection of literary treasures waiting to be
        explored. From timeless classics to contemporary bestsellers, our
        diverse library caters to every taste and preference. Immerse yourself
        in captivating narratives, embark on epic adventures, and discover new
        perspectives through the power of literature. With user-friendly
        features and intuitive navigation, finding your next literary gem is
        effortless.
      </p>
      <div className="flex justify-center items-center">
        <div className="md:w-2/5">
          <img src="https://i.ibb.co/3CLr8MD/welcome.jpg" alt="" />
        </div>
      </div>

      <p className="p-4 text-center font-medium">
        Join our vibrant community of readers, share your thoughts on beloved
        books, and connect with fellow enthusiasts from around the globe. Let
        our website be your companion on your reading journey, guiding you
        through a world of endless possibilities and enriching experiences.
        Start your literary adventure today and unlock the magic of storytelling
        with us.
      </p>
      <div className="text-center">
        <footer className="footer footer-center p-4 bg-base-300 text-base-content">
          <aside>
            <p>
              Copyright © 2024 - All right reserved by Books Valley Industries
              Ltd
            </p>
          </aside>
        </footer>
      </div>
    </div>
  );
};

export default AboutUs;
