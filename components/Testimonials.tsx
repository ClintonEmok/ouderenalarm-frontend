import TextBlock from "./TextBlock";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <div className="bg-white py-12 flex flex-col items-center ">
      <div>
        <h1 className="text-center bold-32 lg:bold-40 max-w-5xl font-bold text-gray-800 mb-8 px-6">
          Wanneer kan “ouderen alarm” u helpen om zo lang mogelijk veilig thuis
          te bijven wonen?
        </h1>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col gap-12 px-6">
        {/* Pair 1 */}
        <div className="flex flex-col md:flex-row items-center md:items-start ">
          <div className="flex flex-col gap-6 w-full">
            <TextBlock
              title="U woont alleen thuis, en bent bang om te vallen..."
              description="U bent niet de enige. Duizenden senioren hebben dezelfde angst, vaak omdat ze bezorgd zijn over de gevolgen van een valpartij."
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-6 items-start md:w-4/5">
            <div className="w-full">
              <TestimonialCard
                stars="★★★★★"
                title="Ik voel me veiliger als ik alleen thuis ben"
                author="Geschreven door: Jacob van Mook"
                content="Ik was bang om te vallen, en heb besloten om contact met jullie op te nemen. Ik heb toen met Arno gesproken en die heeft mij erg fijn advies gegeven, nu ik het alarm dagelijks draag voel ik me zoveel veiliger omdat ik weet dat ik hulp kan krijgen met 1 druk op de knop!"
              />
            </div>
          </div>
        </div>

        {/* Pair 2 */}
        <div className="flex flex-col md:flex-row  justify-center items-center md:items-start">
          <div className="flex flex-col gap-6 w-full">
            <TextBlock
              title="U bent vaak alleen, en hebt een verhoogd risico op een beroerte..."
              description="U weet nooit wanneer u een beroerte krijgt, en dat is vooral een probleem als u vaak alleen bent. Met een Ouderen alarm krijgt u binnen 30 seconden hulp wat de kans op snel herstel vergroot!"
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-6 items-start md:w-4/5">
            {/* Arrow Icons */}

            <div className="w-full">
              <TestimonialCard
                stars="★★★★★"
                title="Snelle hulp na TIA"
                author="Geschreven door: Marjan van Kampen"
                content="Ik ben sinds vorig jaar alleen na het sterven van mijn partner en heb in maart dit jaar een ouderen alarm genomen. 3 maanden later heb ik een TIA gehad en ben bijna van de trap naar de viering gevallen, en dan besef je wel dat je dan alleen bent en dat een ouderen alarm dan levensreddend kan zijn. Het is ook fijn dat ik elke dag een herinnering krijg om mijn medicijnen te nemen."
              />
            </div>
          </div>
        </div>

        {/* Pair 3 */}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start">
          <div className="flex flex-col lg:flex-row gap-6 w-full">
            <TextBlock
              title="Je geeft veel om je oudere familieleden, en maakt je zorgen om hun veiligheid..."
              description="U weet nooit wanneer u een beroerte krijgt, en dat is vooral een probleem als u vaak alleen bent. Met een senioren alarm krijgt u binnen 30 seconden hulp wat de kans op snel herstel vergroot!"
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-6 items-start md:w-4/5">
            <div className="w-full">
              <TestimonialCard
                stars="★★★★★"
                title="Ik voel me veiliger als ik alleen thuis ben"
                author="Geschreven door: Jacob van Mook"
                content="Ik was bang om te vallen, en heb een cursus valpreventie gevolgd, toen hebben ze mij doorgestuurd naar ouderen alarm. Ik heb toen met Arno gesproken en die heeft mij erg fijn advies gegeven, nu ik het alarm dagelijks draag voel ik me zoveel veiliger!"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
