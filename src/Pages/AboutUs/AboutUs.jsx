// AboutUs.jsx
import plantImg from '../../assets/extra-section/leaf animation.gif'

export default function AboutUs() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-12 bg-base-100">
        <div className="text-center items-center"><img src={plantImg} alt="" /></div>
      <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
      About Plant Care Tracker
      </h1>
      <p className="text-lg sm:text-xl text-base-content mb-6">
        Welcome to <span className="font-semibold text-secondary">Plant Care Tracker</span> – your personal assistant for keeping your green friends healthy and happy!
      </p>
      <p className="max-w-2xl text-base sm:text-lg text-base-content opacity-80">
        This web app helps plant lovers track watering schedules, monitor plant health, and manage a personalized plant collection with ease.
        Whether you're a beginner or a seasoned plant parent, our goal is to simplify plant care and help your plants thrive <span>🌱</span>.
      </p>
    </section>
  );
}
