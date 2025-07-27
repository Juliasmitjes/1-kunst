



const Home = () => {
  return (
    <>
      <div className="bg-banana text-center">
        <h1 className="pt-10 font-pangaia tracking-tight text-balance text-peach sm:text-5xl ">
          Schoonheid is overal
        </h1>
        <p className="mt-8 font-nunito text-gray-500 sm:text-xl/8">
        Als dromerig meisje had ik oog voor de schoonheid van het alledaagse: de schittering van kiezels, de ruwe bast van een oude boom vol knoesten, het gracieuze van een naaktslak… In een tuincentrum koop ik vaak een lelijk plantje. ‘Kom maar kleintje, ik zoek een mooie plek voor je en zal je laten stralen.’
        <br />
        <br />
        Als je het wilt en kunt zien, is er schoonheid in vrijwel alle wezens en dingen.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Get started
          </a>
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;