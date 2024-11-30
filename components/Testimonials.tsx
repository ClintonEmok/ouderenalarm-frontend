import TextBlock from "./TextBlock";
import TestimonialCard from "./TestimonialCard";
import { CornerDownRight, MoveDown } from "lucide-react";

export default function Testimonials() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-6xl mx-auto flex flex-col gap-12 p-8">
        {/* Pair 1 */}
        <div className="flex flex-col lg:flex-row gap-6 w-full lg:w-1/2">
          <TextBlock
            title="U woont alleen thuis, en bent bang om te vallen..."
            description="U bent niet de enige. Duizenden senioren hebben dezelfde angst, vaak omdat ze bezorgd zijn over de gevolgen van een valpartij."
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* Arrow Icons */}
          <div className="flex flex-grow justify-center lg:justify-end">
            <MoveDown className="block lg:hidden w-16 h-16 text-gray-500" />
            <CornerDownRight className="hidden lg:block w-1/3 h-1/2 text-gray-500" />
          </div>
          <div className="w-full lg:w-1/2">
            <TestimonialCard
              stars="★★★★★"
              title="Ik voel me veiliger als ik alleen thuis ben"
              author="Geschreven door: Jacob van Mook"
              content="Ik was bang om te vallen, en heb besloten om contact met jullie op te nemen. Ik heb toen met Arno gesproken en die heeft mij erg fijn advies gegeven, nu ik het alarm dagelijks draag voel ik me zoveel veiliger omdat ik weet dat ik hulp kan krijgen met 1 druk op de knop!"
            />
          </div>
        </div>

        {/* Pair 2 */}
        <div className="flex flex-col lg:flex-row gap-6 w-full lg:w-1/2">
          <TextBlock
            title="U bent vaak alleen, en hebt een verhoogd risico op een beroerte..."
            description="U weet nooit wanneer u een beroerte krijgt, en dat is vooral een probleem als u vaak alleen bent. Met een Ouderen alarm krijgt u binnen 30 seconden hulp wat de kans op snel herstel vergroot!"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* Arrow Icons */}
          <div className="flex flex-grow justify-center lg:justify-end">
            <MoveDown className="block lg:hidden w-16 h-16 text-gray-500" />
            <CornerDownRight className="hidden lg:block w-1/3 h-1/2 text-gray-500" />
          </div>
          <div className="w-full lg:w-1/2">
            <TestimonialCard
              stars="★★★★★"
              title="Snelle hulp na TIA"
              author="Geschreven door: Marjan van Kampen"
              content="Ik ben sinds vorig jaar alleen na het sterven van mijn partner en heb in maart dit jaar een ouderen alarm genomen. 3 maanden later heb ik een TIA gehad en ben bijna van de trap naar de viering gevallen, en dan besef je wel dat je dan alleen bent en dat een ouderen alarm dan levensreddend kan zijn. Het is ook fijn dat ik elke dag een herinnering krijg om mijn medicijnen te nemen."
            />
          </div>
        </div>

        {/* Pair 3 */}
        <div className="flex flex-col lg:flex-row gap-6 w-full lg:w-1/2">
          <TextBlock
            title="Je geeft veel om je oudere familieleden, en maakt je zorgen om hun veiligheid..."
            description="U weet nooit wanneer u een beroerte krijgt, en dat is vooral een probleem als u vaak alleen bent. Met een senioren alarm krijgt u binnen 30 seconden hulp wat de kans op snel herstel vergroot!"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* Arrow Icons */}
          <div className="flex flex-grow justify-center lg:justify-end">
            <MoveDown className="block lg:hidden w-16 h-16 text-gray-500" />
            <CornerDownRight className="hidden lg:block w-1/3 h-1/2 text-gray-500" />
          </div>
          <div className="w-full lg:w-1/2">
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
  );
}
