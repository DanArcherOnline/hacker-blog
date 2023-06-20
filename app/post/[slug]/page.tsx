"use client"

import NavBar from "@/components/NavBar"
import RightSidePanel from "@/components/RightSidePanel"
import SideNavMenu from "@/components/SideNavMenu"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function PostPage() {
    const [isMenuOpen, setMenuOpen] = useState(false)
    const [isRightPanelOpen, setRightPanelOpen] = useState(false)
    return (
        <div className="bg-page-bg-grey">
            <div className="lg:max-w-screen-4xl mx-auto">
                <Head>
                    <title>Dan Archer Online</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <SideNavMenu
                    isOpen={isMenuOpen}
                    setMenuOpen={setMenuOpen}
                    setRightPanelOpen={setRightPanelOpen}
                >
                    <Link
                        href='/'
                        className="-m-4 p-4 flex items-center space-x-3 rounded-md hover:bg-accent-pink transition duration-300"
                    >
                        <div>Home</div>
                    </Link>
                    <Link
                        href='#'
                        className="-m-4 p-4 flex items-center space-x-3 rounded-md hover:bg-accent-pink transition duration-300"
                    >
                        <div>About Me</div>
                    </Link>
                </SideNavMenu>
                <RightSidePanel
                    isOpen={isRightPanelOpen}
                    setOpen={setRightPanelOpen}
                />

                {/* Page Content */}
                <NavBar
                    isOpen={isMenuOpen}
                    setMenuOpen={setMenuOpen}
                    setRightSidePanelOpen={setRightPanelOpen}
                >
                    <Link
                        href='/'
                        className="text-accent-pink"
                    >Home
                    </Link>
                    <Link
                        href='#'
                        className=""
                    >About Me
                    </Link>
                </NavBar>
                <main className={`flex flex-col pt-20 font-inter `}>
                    <div className="flex flex-col p-2 gap-2 md:px-8 max-w-3xl mx-auto">
                        <h1 className="font-black text-4xl md:text-6xl">Slovenias DragonHack convention and what to prepare for</h1>
                        <h2 className="text-2xl md:text-4xl">Slovenias DragonHack convention and what to prepare for</h2>
                    </div>
                    <div className="relative w-screen h-96 mx-auto my-8 md:h-[30rem] lg:max-w-7xl lg:h-[38rem]">
                        <Image
                            src={"/../public/test_img.jpeg"}
                            alt={"Feature Image"}
                            fill
                            className="object-cover md:p-2 lg:p-4 md:rounded"
                        />
                    </div>
                    <div className="p-2 font-sourceSerif4 font-light text-body-text-grey md:px-8 md:max-w-4xl mx-auto z-20 ">
                        <div className="bg-transparent md:bg-card-grey md:rounded md:-mt-32 md:p-10 text-lg">
                            <p>
                                Grimer victini onix pineco cutiefly feraligatr panpour dragonite magnemite muk. Araquanid lanturn girafarig drampa, dewgong seadra latias typhlosion malamar nihilego zigzagoon aromatisse. Seismitoad ho-oh floette cryogonal loudred cobalion vikavolt bouffalant marowak. Hoothoot nidoking deino tsareena herdier venusaur seviper pawniard farfetch’d. Parasect blastoise meganium abomasnow pangoro spheal floette squirtle, inkay tyrantrum dialga doublade weavile chinchou shellos. Beautifly goomy drampa deino suicune passimian. Happiny gothita patrat chespin. Spinda snivy staravia gigalith salamence exeggutor lurantis mudsdale, eelektrik kommo-o lucario metapod zygarde spoink mareanie accelgor teddiursa hippopotas. Slaking gastrodon solosis quilava, karrablast mime jr scolipede amoonguss patrat. Hoopa kartana weavile pyroar oshawott chansey blastoise wormadam houndour salandit. Litleo maractus aegislash stufful vullaby solrock. Celebi crawdaunt cottonee barbaracle eelektross, skiploom lanturn jirachi piplup xurkitree gulpin. Garchomp landorus wailmer, gumshoos pheromosa baltoy. Basculin drilbur spewpa snorlax. Jynx azelf furret masquerain xatu lickitung kakuna, tyrogue skiploom misdreavus. Azelf sandshrew tyrogue ambipom dialga swirlix gothitelle. Anorith mantyke noivern joltik litleo kabutops blacephalon glalie ponyta.

                                Finneon spinarak gulpin, scraggy xerneas roselia. Quagsire blaziken beedrill. Drowzee tepig numel magmortar gumshoos joltik scyther sawk banette, kingler whimsicott rhyperior sawk blacephalon. Dialga pumpkaboo lunatone mandibuzz charmander kabutops spiritomb stunfisk uxie. Solrock dewgong gourgeist torterra shellder emolga darmanitan. Honchkrow buizel marshadow maractus florges ledian latios, decidueye sentret crabominable empoleon oricorio blaziken zangoose. Growlithe torracat heatran vanillish luxray electrode, swablu mightyena swalot tepig kricketune weezing phione. Nidorina bayleef porygon2 heatmor poipole barboach. Trubbish mankey fomantis snorunt, mantyke trubbish aron dwebble heliolisk. Zoroark furfrou sharpedo jynx weedle avalugg. Empoleon silcoon grumpig paras necrozma mantyke shuckle huntail groudon poipole, aggron shedinja poliwrath greninja kricketot oddish duosion.

                                Fennekin zorua yanma cresselia dewpider lotad slowking ho-oh. Herdier manectric aron gogoat spheal floette yveltal simipour nidoran♂. Dewott chandelure kingler diglett doduo reshiram popplio persian ribombee noibat. Quilava togepi whiscash. Gothita lotad octillery buzzwole starmie. Teddiursa castform cryogonal meowth luvdisc lumineon scizor: honedge dragonite whimsicott yungoos clamperl staraptor garchomp. Keldeo furret zapdos, eelektrik horsea cradily larvitar dusknoir mudkip frogadier kecleon fletchling. Exeggutor emboar ribombee kingdra grovyle stufful ledyba swanna, shelmet machop magnemite salazzle treecko tyrogue quagsire staraptor surskit.

                                Grimer victini onix pineco cutiefly feraligatr panpour dragonite magnemite muk. Araquanid lanturn girafarig drampa, dewgong seadra latias typhlosion malamar nihilego zigzagoon aromatisse. Seismitoad ho-oh floette cryogonal loudred cobalion vikavolt bouffalant marowak. Hoothoot nidoking deino tsareena herdier venusaur seviper pawniard farfetch’d. Parasect blastoise meganium abomasnow pangoro spheal floette squirtle, inkay tyrantrum dialga doublade weavile chinchou shellos. Beautifly goomy drampa deino suicune passimian. Happiny gothita patrat chespin. Spinda snivy staravia gigalith salamence exeggutor lurantis mudsdale, eelektrik kommo-o lucario metapod zygarde spoink mareanie accelgor teddiursa hippopotas. Slaking gastrodon solosis quilava, karrablast mime jr scolipede amoonguss patrat. Hoopa kartana weavile pyroar oshawott chansey blastoise wormadam houndour salandit. Litleo maractus aegislash stufful vullaby solrock. Celebi crawdaunt cottonee barbaracle eelektross, skiploom lanturn jirachi piplup xurkitree gulpin. Garchomp landorus wailmer, gumshoos pheromosa baltoy. Basculin drilbur spewpa snorlax. Jynx azelf furret masquerain xatu lickitung kakuna, tyrogue skiploom misdreavus. Azelf sandshrew tyrogue ambipom dialga swirlix gothitelle. Anorith mantyke noivern joltik litleo kabutops blacephalon glalie ponyta.

                                Finneon spinarak gulpin, scraggy xerneas roselia. Quagsire blaziken beedrill. Drowzee tepig numel magmortar gumshoos joltik scyther sawk banette, kingler whimsicott rhyperior sawk blacephalon. Dialga pumpkaboo lunatone mandibuzz charmander kabutops spiritomb stunfisk uxie. Solrock dewgong gourgeist torterra shellder emolga darmanitan. Honchkrow buizel marshadow maractus florges ledian latios, decidueye sentret crabominable empoleon oricorio blaziken zangoose. Growlithe torracat heatran vanillish luxray electrode, swablu mightyena swalot tepig kricketune weezing phione. Nidorina bayleef porygon2 heatmor poipole barboach. Trubbish mankey fomantis snorunt, mantyke trubbish aron dwebble heliolisk. Zoroark furfrou sharpedo jynx weedle avalugg. Empoleon silcoon grumpig paras necrozma mantyke shuckle huntail groudon poipole, aggron shedinja poliwrath greninja kricketot oddish duosion.

                                Fennekin zorua yanma cresselia dewpider lotad slowking ho-oh. Herdier manectric aron gogoat spheal floette yveltal simipour nidoran♂. Dewott chandelure kingler diglett doduo reshiram popplio persian ribombee noibat. Quilava togepi whiscash. Gothita lotad octillery buzzwole starmie. Teddiursa castform cryogonal meowth luvdisc lumineon scizor: honedge dragonite whimsicott yungoos clamperl staraptor garchomp. Keldeo furret zapdos, eelektrik horsea cradily larvitar dusknoir mudkip frogadier kecleon fletchling. Exeggutor emboar ribombee kingdra grovyle stufful ledyba swanna, shelmet machop magnemite salazzle treecko tyrogue quagsire staraptor surskit.

                                Grimer victini onix pineco cutiefly feraligatr panpour dragonite magnemite muk. Araquanid lanturn girafarig drampa, dewgong seadra latias typhlosion malamar nihilego zigzagoon aromatisse. Seismitoad ho-oh floette cryogonal loudred cobalion vikavolt bouffalant marowak. Hoothoot nidoking deino tsareena herdier venusaur seviper pawniard farfetch’d. Parasect blastoise meganium abomasnow pangoro spheal floette squirtle, inkay tyrantrum dialga doublade weavile chinchou shellos. Beautifly goomy drampa deino suicune passimian. Happiny gothita patrat chespin. Spinda snivy staravia gigalith salamence exeggutor lurantis mudsdale, eelektrik kommo-o lucario metapod zygarde spoink mareanie accelgor teddiursa hippopotas. Slaking gastrodon solosis quilava, karrablast mime jr scolipede amoonguss patrat. Hoopa kartana weavile pyroar oshawott chansey blastoise wormadam houndour salandit. Litleo maractus aegislash stufful vullaby solrock. Celebi crawdaunt cottonee barbaracle eelektross, skiploom lanturn jirachi piplup xurkitree gulpin. Garchomp landorus wailmer, gumshoos pheromosa baltoy. Basculin drilbur spewpa snorlax. Jynx azelf furret masquerain xatu lickitung kakuna, tyrogue skiploom misdreavus. Azelf sandshrew tyrogue ambipom dialga swirlix gothitelle. Anorith mantyke noivern joltik litleo kabutops blacephalon glalie ponyta.

                                Finneon spinarak gulpin, scraggy xerneas roselia. Quagsire blaziken beedrill. Drowzee tepig numel magmortar gumshoos joltik scyther sawk banette, kingler whimsicott rhyperior sawk blacephalon. Dialga pumpkaboo lunatone mandibuzz charmander kabutops spiritomb stunfisk uxie. Solrock dewgong gourgeist torterra shellder emolga darmanitan. Honchkrow buizel marshadow maractus florges ledian latios, decidueye sentret crabominable empoleon oricorio blaziken zangoose. Growlithe torracat heatran vanillish luxray electrode, swablu mightyena swalot tepig kricketune weezing phione. Nidorina bayleef porygon2 heatmor poipole barboach. Trubbish mankey fomantis snorunt, mantyke trubbish aron dwebble heliolisk. Zoroark furfrou sharpedo jynx weedle avalugg. Empoleon silcoon grumpig paras necrozma mantyke shuckle huntail groudon poipole, aggron shedinja poliwrath greninja kricketot oddish duosion.

                                Fennekin zorua yanma cresselia dewpider lotad slowking ho-oh. Herdier manectric aron gogoat spheal floette yveltal simipour nidoran♂. Dewott chandelure kingler diglett doduo reshiram popplio persian ribombee noibat. Quilava togepi whiscash. Gothita lotad octillery buzzwole starmie. Teddiursa castform cryogonal meowth luvdisc lumineon scizor: honedge dragonite whimsicott yungoos clamperl staraptor garchomp. Keldeo furret zapdos, eelektrik horsea cradily larvitar dusknoir mudkip frogadier kecleon fletchling. Exeggutor emboar ribombee kingdra grovyle stufful ledyba swanna, shelmet machop magnemite salazzle treecko tyrogue quagsire staraptor surskit.



                                Grimer victini onix pineco cutiefly feraligatr panpour dragonite magnemite muk. Araquanid lanturn girafarig drampa, dewgong seadra latias typhlosion malamar nihilego zigzagoon aromatisse. Seismitoad ho-oh floette cryogonal loudred cobalion vikavolt bouffalant marowak. Hoothoot nidoking deino tsareena herdier venusaur seviper pawniard farfetch’d. Parasect blastoise meganium abomasnow pangoro spheal floette squirtle, inkay tyrantrum dialga doublade weavile chinchou shellos. Beautifly goomy drampa deino suicune passimian. Happiny gothita patrat chespin. Spinda snivy staravia gigalith salamence exeggutor lurantis mudsdale, eelektrik kommo-o lucario metapod zygarde spoink mareanie accelgor teddiursa hippopotas. Slaking gastrodon solosis quilava, karrablast mime jr scolipede amoonguss patrat. Hoopa kartana weavile pyroar oshawott chansey blastoise wormadam houndour salandit. Litleo maractus aegislash stufful vullaby solrock. Celebi crawdaunt cottonee barbaracle eelektross, skiploom lanturn jirachi piplup xurkitree gulpin. Garchomp landorus wailmer, gumshoos pheromosa baltoy. Basculin drilbur spewpa snorlax. Jynx azelf furret masquerain xatu lickitung kakuna, tyrogue skiploom misdreavus. Azelf sandshrew tyrogue ambipom dialga swirlix gothitelle. Anorith mantyke noivern joltik litleo kabutops blacephalon glalie ponyta.

                                Finneon spinarak gulpin, scraggy xerneas roselia. Quagsire blaziken beedrill. Drowzee tepig numel magmortar gumshoos joltik scyther sawk banette, kingler whimsicott rhyperior sawk blacephalon. Dialga pumpkaboo lunatone mandibuzz charmander kabutops spiritomb stunfisk uxie. Solrock dewgong gourgeist torterra shellder emolga darmanitan. Honchkrow buizel marshadow maractus florges ledian latios, decidueye sentret crabominable empoleon oricorio blaziken zangoose. Growlithe torracat heatran vanillish luxray electrode, swablu mightyena swalot tepig kricketune weezing phione. Nidorina bayleef porygon2 heatmor poipole barboach. Trubbish mankey fomantis snorunt, mantyke trubbish aron dwebble heliolisk. Zoroark furfrou sharpedo jynx weedle avalugg. Empoleon silcoon grumpig paras necrozma mantyke shuckle huntail groudon poipole, aggron shedinja poliwrath greninja kricketot oddish duosion.

                                Fennekin zorua yanma cresselia dewpider lotad slowking ho-oh. Herdier manectric aron gogoat spheal floette yveltal simipour nidoran♂. Dewott chandelure kingler diglett doduo reshiram popplio persian ribombee noibat. Quilava togepi whiscash. Gothita lotad octillery buzzwole starmie. Teddiursa castform cryogonal meowth luvdisc lumineon scizor: honedge dragonite whimsicott yungoos clamperl staraptor garchomp. Keldeo furret zapdos, eelektrik horsea cradily larvitar dusknoir mudkip frogadier kecleon fletchling. Exeggutor emboar ribombee kingdra grovyle stufful ledyba swanna, shelmet machop magnemite salazzle treecko tyrogue quagsire staraptor surskit.


                            </p>
                        </div>
                    </div>

                </main>
            </div>
        </div>
    )
}
