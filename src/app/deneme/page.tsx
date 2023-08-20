"use client";
import { motion, useAnimation } from "framer-motion";
import React from "react";
// OverlappingCards.js

const Card = ({ title, index }: { title: string, index: number }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { delay: index * 0.2 } },
  };
  const controls = useAnimation();
  const handleScroll = () => {
    const scrollY = window.scrollY;
    controls.start({ y: scrollY });
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="card text-black"
      variants={cardVariants}
      initial="hidden"
      animate={controls}
    >
      <h2>{title}</h2>
    </motion.div>
  );
};

const OverlappingCards = ({ data }: { data: Array<Card> }) => {
  return (
    <div className="card-container">
      {data.map((item, index) => (
        <Card key={index} title={item.title} index={index} />
      ))}
    </div>
  );
};
type Card = {
  title: string;
}

const Page = () => {
  const cardData: Array<Card> = [
    { title: "Card 1 Atakan" },
    { title: "Card 2" },
    { title: "Card 3" },
    // Add more card data as needed
  ];
  return (

    <div
      style={{ color: "black", background: "linear-gradient(#e8e8e8, #e0e0e0)", paddingTop: "400px" }}
      className="h-[2000px]">
      <OverlappingCards data={cardData} />
      <div className="w-full">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil repellat officia
        asperiores sequi quis sapiente perferendis maxime sunt facere, illo aspernatur est
        doloremque repellendus reprehenderit aliquid praesentium modi omnis adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ullam non rem numquam aut placeat debitis repudiandae nobis quos, tempore quaerat dolores nemo odio nostrum vitae, necessitatibus voluptates dignissimos omnis?
        Voluptates, iste nisi odit beatae quod natus sunt voluptate modi. A, facilis, laborum rerum aliquid non neque rem dolore, fugiat omnis veniam at deserunt dolorum numquam corrupti dignissimos expedita autem!
        Officiis voluptas aliquam quia maiores, excepturi, nulla veniam minima accusantium nisi nemo corporis magnam ratione assumenda reiciendis distinctio vel itaque ipsum esse deserunt exercitationem eum? Magni beatae impedit repudiandae facere.
        Autem temporibus eos laboriosam corporis similique delectus consequatur a odio earum tempore odit quidem impedit quod, sit quia adipisci quas ea, voluptatum cum porro reprehenderit numquam exercitationem. Est, mollitia adipisci.
        Natus quas deserunt numquam fugit quae quos repudiandae nemo nulla, impedit illum accusantium aperiam. Accusantium omnis pariatur facere ducimus necessitatibus quisquam, velit optio. Magni perspiciatis rerum quam at omnis blanditiis?
        Iste dolorum commodi at iusto ducimus neque recusandae sed maiores sunt, deserunt esse alias atque ea quis ratione autem similique. Necessitatibus vel ipsam minus rem aliquid, quas labore asperiores perspiciatis?
        Iusto odit cupiditate nesciunt ex dolorem? Assumenda sint accusamus cupiditate voluptatum eum inventore beatae nostrum eius architecto enim velit voluptas quasi blanditiis explicabo ea minus in nemo, ab at porro?
        Similique illum natus eius quos omnis sed ipsam, eligendi accusantium vero. Rerum necessitatibus vel vitae, inventore corrupti impedit aliquam mollitia iste nam itaque beatae natus cumque consequatur, voluptatum tempore quod.
        Tenetur libero quibusdam eveniet aperiam impedit vitae vel cupiditate officiis sint, at exercitationem illo labore repellendus odit ipsum autem minus adipisci, perspiciatis ex illum debitis laboriosam numquam consequatur. Non, repellat.
        Eos quos maiores quo esse, provident repellat natus doloribus quasi deleniti, laudantium facilis id cupiditate ad voluptatum reprehenderit neque autem sapiente dolor reiciendis laborum aliquid in et non molestiae. Consectetur.
        Aspernatur quod nostrum tempore eligendi sit corrupti saepe ad, dolore velit a dolores labore iusto deserunt repudiandae incidunt eos cumque error qui dolorem impedit ex placeat tenetur minus libero. Quia?
        Quos similique harum nostrum voluptatum, dicta iure laboriosam? Amet perspiciatis dolorum magni aliquid reiciendis quia, commodi facilis, rem veniam adipisci hic facere corporis culpa dolorem quaerat dolores dolor voluptatem voluptates.
        Cum sapiente tempora sed, eius ducimus excepturi veritatis in aperiam ab dolor architecto, nemo velit similique, ratione itaque voluptatum nam dolore nihil quisquam quis id. Voluptatibus numquam quisquam accusantium explicabo.
        Et, labore. Voluptatibus dolore nihil hic. Beatae voluptas fugiat dolores aliquam at voluptatibus obcaecati corrupti qui delectus saepe. Provident labore nam placeat aperiam voluptates. Animi eius fugit totam ad molestias?
        Minima aliquam illum nulla suscipit eos dicta ratione unde rerum? Iste aliquam iure cumque. Quas ipsam id, soluta delectus repellat dignissimos, veritatis doloremque rerum quam ut sequi aliquid commodi. Mollitia.
        Amet omnis quis laborum reprehenderit? Sit voluptates in dolores adipisci deserunt sed nulla minus repellat delectus blanditiis dolorem ullam corrupti enim, exercitationem cum aliquid praesentium accusantium eos explicabo assumenda amet?
        Ducimus, natus repellendus fugit iure a ipsam et repellat saepe ipsa laudantium quas quos, nesciunt tenetur eum sunt minus molestias provident dolores est sit doloribus esse nostrum iste at. Deserunt?
        Distinctio eaque et atque asperiores nisi amet ratione porro expedita explicabo a veniam, eius natus placeat sint rerum laborum odio ab ducimus, quasi quia vitae dolorum sunt in earum. Voluptate.
        Quod praesentium assumenda quidem recusandae laudantium quas obcaecati quaerat molestias! Esse ea nesciunt magni cumque amet eligendi architecto perspiciatis maiores et consequatur culpa consequuntur, laborum minus quod enim ducimus maxime!
        Tempore veniam, quia quae obcaecati mollitia porro quo sed optio, ex culpa vel ratione ullam, commodi quaerat dolorum! Optio facere dolorem aliquid sint itaque odit sit debitis perferendis quas voluptatibus!
        Amet optio voluptate perspiciatis totam facilis in a, vero quo eius dolorum asperiores sint atque nemo, nobis assumenda laborum consequatur autem, eveniet consequuntur quia. Neque odio laboriosam dolores unde doloribus.
        Culpa ratione, nam suscipit a sunt quisquam totam, sapiente aliquid ducimus iusto possimus asperiores quae iste eos labore, iure perferendis nihil! Animi minus dolor ducimus eius, veniam laborum eaque illum.
        Nihil accusamus, tempora tenetur, beatae porro at nulla incidunt voluptas ab dolorem ad ipsam dicta culpa aperiam voluptatem numquam temporibus. Culpa ducimus id, tempora neque suscipit tempore magnam nihil pariatur.
        Nostrum aliquid enim voluptatibus, nam nesciunt officia deserunt aut maxime iste dolorem repudiandae quo porro sint fugit molestias nisi iure a fugiat in pariatur et necessitatibus suscipit laborum. Porro, et?
        Laborum, sunt repellendus adipisci exercitationem recusandae hic voluptates, itaque inventore sapiente ipsa praesentium commodi. Veniam numquam eaque repudiandae officiis culpa velit cumque, reiciendis repellat blanditiis, laborum delectus rem quod possimus!
        Perferendis mollitia neque repellat atque, animi voluptatum rem blanditiis laborum nostrum eveniet veniam iusto voluptate veritatis, placeat excepturi? Et commodi aliquam voluptatum nesciunt delectus ad, quidem quaerat possimus ullam aut!
        Voluptate cupiditate voluptatem beatae reiciendis eaque ipsum animi, quos ut, in, pariatur corrupti quam non illo inventore repellat nam? Placeat officia a rem ducimus soluta eum quam assumenda nobis at.
        Eum ullam illum incidunt quod ex nisi, sit, velit totam autem qui repellendus error provident? Aut minima laudantium, ipsam dolorum maiores, magni aperiam, non iure officiis exercitationem laborum placeat eum!
        Molestias autem iusto sunt itaque? Facilis minus commodi nesciunt quas quod consequuntur perferendis harum eos dolorum, aliquid voluptas unde in eligendi tenetur. Quae adipisci magnam maxime! Eum, illo sint? Consectetur.
        Nobis sit illo beatae libero obcaecati incidunt quasi iure iste dolores, cupiditate, iusto delectus nemo voluptatem eius odio tempore, nostrum omnis non aspernatur. Neque quaerat perferendis excepturi maxime eius aut!
        Eveniet nobis tempora cupiditate molestiae, amet sunt. Corporis iste quibusdam ipsum adipisci ducimus aliquid itaque ad, maiores quaerat officia aspernatur autem, tempora perferendis dolore placeat modi earum deserunt, quia repudiandae!
        Quo, fuga corrupti suscipit fugit architecto molestiae pariatur rerum officia, aliquam reprehenderit ducimus quos tempora ullam animi expedita nobis at! Quo reiciendis nobis modi beatae alias. Odio commodi iure ratione.
        Fugit aperiam aliquam nam dolor molestias praesentium nobis minima, expedita voluptates tempore et veritatis asperiores est soluta neque. Harum praesentium dignissimos laudantium nisi aliquid iusto deleniti. Totam animi possimus quam!
        Eligendi quas deserunt voluptates? Ab porro ut atque accusamus nesciunt harum repudiandae et enim quae, illo maiores! Labore, culpa necessitatibus placeat est ad, adipisci corporis, delectus autem odio quod sint.
        Fuga molestiae labore voluptas id aliquid modi natus eaque neque, perspiciatis beatae esse? Magnam porro, iste quisquam illo quidem quis nobis dolorem facilis earum asperiores nihil excepturi! Commodi, minus laudantium?
        Omnis inventore dolorem quia dolor recusandae quam, eaque nobis nostrum quo culpa accusamus, aperiam iste. Ut nostrum commodi non ea, consectetur quibusdam voluptas atque corporis. Facere ab quas laudantium tempore.
        Quibusdam velit, blanditiis dolorum quam voluptatum quisquam corrupti quo nihil at, recusandae magni non deserunt quis corporis sit nobis doloribus? Et, eveniet. Enim quaerat rerum omnis voluptas harum ab minus!
        Voluptates pariatur, hic corporis, atque voluptatibus a inventore sunt officiis labore tenetur unde quia modi fugit consectetur explicabo impedit blanditiis sit quasi tempora distinctio, voluptate est. Impedit quam inventore voluptates.
        Quos fugit placeat officiis mollitia asperiores consequatur commodi veniam laboriosam. Quisquam minus consequatur laborum aliquam. Rerum deserunt eveniet esse asperiores porro possimus laborum facilis labore, ipsam, ab, ipsum provident in?
        Corrupti similique, quae tempora nisi excepturi placeat nobis, odio voluptatibus commodi velit dolores ipsa nemo consectetur earum vitae voluptate. Cum nihil voluptatibus necessitatibus dignissimos quaerat aspernatur laboriosam voluptates suscipit minus.
        Accusamus facere dolore alias excepturi eveniet! Architecto eos sint vitae, vel, velit voluptatem nulla provident at distinctio magni repudiandae. Accusantium, temporibus delectus possimus architecto reiciendis laborum quibusdam quae libero minus.
        Nesciunt, reprehenderit cumque assumenda, labore ipsa vitae facilis aspernatur velit eos molestiae dignissimos vel cum culpa sapiente ducimus magnam placeat animi hic excepturi repellendus quidem! Consectetur magni architecto commodi nemo?
        Inventore voluptas quia quam laudantium exercitationem dolore totam! Totam porro aliquam et! Soluta dolorum tempora placeat, aperiam veritatis vero quas minus cum nemo nobis corrupti tenetur, non aspernatur, quibusdam cumque?
        Autem veniam reprehenderit velit ut facilis placeat, nostrum optio consectetur minima unde tempore? Mollitia laborum maiores ipsum atque distinctio provident. Quibusdam alias sed eos soluta laudantium placeat recusandae eius atque?
        Quia, aliquid in. Quas ut alias pariatur harum perspiciatis laboriosam possimus dolor nisi fugit vero! Possimus, pariatur! Rerum illo possimus architecto, suscipit nihil sunt, ipsam autem pariatur eveniet odio ipsa.
        Exercitationem culpa animi quo ad? Nemo consectetur exercitationem tenetur voluptatum, minima molestiae quas quam aliquid? Fuga iste dolorum placeat error. Dicta, quibusdam dolor ullam distinctio optio molestiae blanditiis minus perferendis.
        Neque iste laboriosam excepturi ipsam libero, quod nostrum mollitia optio eligendi molestiae deserunt provident omnis quasi nihil velit fugit quidem, suscipit soluta error? Ipsa totam eum doloremque? Accusamus, possimus. Quam.
        Et natus sed pariatur illum voluptates! Facere exercitationem ut doloremque quo in, sequi vero eaque quibusdam, quia blanditiis minima asperiores possimus distinctio harum? Nesciunt a quae voluptates dolore unde necessitatibus?
        Labore ea neque quos deserunt provident fugiat explicabo beatae enim iste autem accusamus nisi veritatis suscipit nihil mollitia, optio necessitatibus consequatur perferendis nemo? Molestiae praesentium dolorem, quo vel hic exercitationem.
        Perspiciatis impedit est cupiditate repellendus beatae, a enim eum aliquam odit suscipit vitae delectus eligendi inventore minima quas laborum et sapiente rem animi aspernatur laudantium. Adipisci ea cum voluptas consectetur.
        Nisi pariatur aspernatur corrupti recusandae in porro repellat eveniet voluptates consequuntur cupiditate incidunt ut quam quas blanditiis, nemo magni, odio delectus ullam eaque facilis officiis? Deserunt at magni magnam perferendis!
        Distinctio maiores corrupti molestiae, reiciendis dicta nobis saepe quam aliquam ratione impedit qui tenetur eius voluptatem eligendi ullam aperiam necessitatibus modi beatae at nisi aliquid. Voluptatum ducimus ipsam optio saepe!
        Aperiam tempore saepe magnam exercitationem ipsa fugiat, reiciendis consectetur deserunt voluptatum recusandae nihil optio aliquam iste! Esse, voluptate mollitia unde molestiae laudantium facere quasi molestias atque nesciunt reprehenderit voluptas sapiente?
        Ea optio repellendus molestias repudiandae ex perspiciatis a sequi, et sit dolores omnis quis, sint nihil earum! Fuga voluptatum laudantium quaerat amet rerum, officiis aspernatur minus ipsa similique obcaecati voluptas.
        Quod, dolor delectus. Ipsa repellat tenetur, iure dicta quidem consequatur sunt alias ullam eaque, atque nam, iusto quis. Ea adipisci optio facilis odit possimus ex! Illo, ad soluta. Aliquam, modi.
        Rem et, repellat at ratione repudiandae ipsam eum ad odio harum suscipit eligendi quod incidunt deserunt, voluptates in assumenda facere tempora veritatis sequi sit maxime qui? Quos eligendi nulla modi.
        Vel perspiciatis quia eaque est quas, vero nobis amet deleniti! Repellat voluptatibus accusamus impedit ad culpa soluta neque, suscipit numquam animi esse totam maiores enim accusantium recusandae consectetur asperiores cumque?
        Animi sint esse dicta autem laborum quam eligendi ut possimus delectus reprehenderit repudiandae corporis officia soluta, ea culpa, nihil impedit quidem quod ipsa corrupti accusantium cum ex. Enim, quia et?
        Nesciunt eius porro ducimus minima, quaerat explicabo quod? Architecto, cupiditate dolor cumque recusandae laudantium magnam, quam quos fugit ad quae atque minus omnis? Nam cum fuga quidem molestias aliquid quasi!
        Error expedita maxime sint cupiditate quia odio dignissimos quisquam, commodi, temporibus velit veniam aliquid deserunt. Recusandae consequatur earum repudiandae hic, quae quidem corporis ratione. Et tenetur pariatur exercitationem dicta quo.
        Porro eos omnis inventore, maxime aut delectus voluptas amet nostrum provident numquam ut autem, voluptatem, alias similique quasi accusamus accusantium debitis cumque sit. Rerum ducimus minus quia adipisci sunt quis?
        Nulla quae molestias eos vero possimus. Eligendi necessitatibus corrupti eaque facilis quis amet excepturi cupiditate soluta velit porro aliquid molestiae nihil expedita quos adipisci earum voluptate maiores quo, tenetur tempore.
        Voluptatem fugit eaque est et obcaecati consequatur, ipsa itaque dignissimos alias porro illum laboriosam non, delectus perferendis at, fuga eligendi eum sed reprehenderit quia mollitia cum? Suscipit debitis explicabo repellendus.
        Illo, incidunt nulla ipsa eligendi itaque tenetur vero architecto cumque, autem, debitis iste! Quibusdam eveniet pariatur, rem asperiores, sequi ad quia, explicabo itaque nisi animi impedit ducimus ea. Provident, non.
        Optio nobis, natus quo impedit nam ratione voluptas officia exercitationem? Perferendis cum distinctio laboriosam officia eum minus esse excepturi ipsa doloremque sequi molestias provident aperiam tempore, obcaecati unde. Natus, nihil!
        Voluptas vitae odio quasi adipisci, hic distinctio suscipit expedita laudantium recusandae inventore consectetur illum esse ullam eaque quae, architecto vel quod necessitatibus ipsam cupiditate quas dolor. Consequatur, officiis labore! Cupiditate!
        Fuga quia modi dolorem enim facilis. Deserunt quos optio sequi architecto molestiae tempore autem est accusamus tenetur, quisquam ducimus iste eaque sint. Pariatur cum modi illo in aliquam praesentium ut.
        Facilis vero ab quibusdam in, consequatur, praesentium iste maiores sunt error assumenda recusandae doloremque accusantium nemo corrupti quae voluptate ea totam illo? A incidunt rem, magni neque aspernatur sed sit!
        Explicabo, repudiandae excepturi possimus labore delectus ducimus voluptatum veritatis recusandae nam nemo quia amet eos, iste illo placeat libero dolore non reprehenderit quibusdam cupiditate qui aliquam, ex ratione neque. Obcaecati.
        Tenetur sequi dicta sit. Nobis voluptates sit cumque, est repellat necessitatibus, enim repellendus atque ratione esse nisi, eius quis adipisci. Error voluptatum eligendi suscipit odit mollitia fugiat in enim necessitatibus.
        Ex, odit amet soluta veniam dolore officiis ipsam velit eveniet fugit dolor accusantium optio, architecto numquam quibusdam delectus facilis. Nobis debitis architecto in exercitationem, aperiam consequatur minima iste veniam voluptatum.
        Eaque aliquam consectetur delectus iste alias, unde obcaecati voluptatum sit provident placeat in ratione nostrum laborum soluta facilis reprehenderit esse? Incidunt velit cum harum ipsum a quisquam placeat illum rerum.
        Necessitatibus, perferendis. Tenetur provident hic architecto non aliquam iure odit? Sequi, expedita unde facilis est consectetur consequatur ut ducimus laborum dolorem ad nemo adipisci exercitationem quod, rem ex accusantium doloribus.
        Dolorem quae molestias nihil sapiente consectetur enim, velit blanditiis nesciunt asperiores autem laudantium libero sed eum! Aperiam repudiandae perspiciatis aliquam amet provident ex porro nulla commodi ut? Dolores, minus amet?
        Dolor quas, incidunt voluptates inventore adipisci laboriosam dolorem perspiciatis neque. Molestias praesentium maxime accusamus amet adipisci eveniet, nulla consequuntur mollitia. Quod libero sunt soluta necessitatibus debitis impedit ea voluptates modi?
        Consequatur commodi officia et vel voluptatem quas blanditiis corporis, animi, quidem est, architecto debitis magnam! Beatae dignissimos deserunt, consequatur maiores fuga voluptate veniam esse ipsam ad inventore delectus suscipit dicta!
        Beatae voluptatem eum voluptatum numquam cum reprehenderit earum hic consequuntur quae? Debitis, beatae molestias quas atque aperiam aspernatur, laboriosam doloribus molestiae quam enim veritatis? Molestiae quia vero commodi quaerat eum.
        Nisi reprehenderit vero assumenda officia dolores dignissimos. Laboriosam animi obcaecati nam voluptatibus nihil odit ducimus voluptas quaerat reiciendis? Eveniet fugit ducimus at quis quae pariatur necessitatibus dolorum dolores eos animi.
        Magni voluptatibus id tempore reiciendis iure neque autem aspernatur deleniti, voluptates explicabo. Minima numquam quaerat harum non earum esse labore. Tenetur ratione a omnis soluta amet molestias illum natus officia?
        In eveniet modi numquam, itaque vero facere earum. Quisquam labore repudiandae esse non inventore quidem eum beatae magni libero, a deleniti unde placeat eaque ullam cum architecto. Iste, reiciendis suscipit!</div>

    </div>
  );
};

export default Page;