



const Home = () => {
  return (
    <>
      <div className="bg-banana text-left">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 pt-6 items-center">      
          <div>
            <h1 className="pt-24 font-pangaia tracking-tight text-balance text-peach sm:text-6xl">
              Schoonheid is overal
            </h1>
            <p className="mt-8 font-nunito text-gray-500 sm:text-xl/8 pb-10 pr-6">
              Als dromerig meisje had ik oog voor de schoonheid van het alledaagse: de schittering van kiezels, de ruwe bast van een oude boom vol knoesten, het gracieuze van een naaktslak… In een tuincentrum koop ik vaak een lelijk plantje. ‘Kom maar kleintje, ik zoek een mooie plek voor je en zal je laten stralen.’
              <br /><br />
              Als je het wilt en kunt zien, is er schoonheid in vrijwel alle wezens en dingen.
            </p>
          </div>
          <div>
            <img
              className="pt-24 w-full rounded-lg"
              src="/images/test-image-woman-painting.jpg"
              alt="Vrouw schildert kunstwerk"
            />
          </div>
      </div>
    </div>
    </>
  );
};

export default Home;