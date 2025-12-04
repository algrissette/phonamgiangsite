import '@fortawesome/fontawesome-free/css/all.min.css';


const SocialMedia = () => {


  return (
    <div className="w-full flex justify-start mb-6 pr-4 bg-amber-50">
      <hr></hr>
      <div className="flex gap-4 text-gray-700 text-2xl">
        <a href="https://www.instagram.com/phonamgiangg/?hl=en" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram hover:text-pink-500"></i>
        </a>
        <a href="https://www.facebook.com/namgiangrestaurant/?locale=vi_VN" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook hover:text-blue-500"></i>
        </a>

      </div>
    </div>

  )
}

export default SocialMedia