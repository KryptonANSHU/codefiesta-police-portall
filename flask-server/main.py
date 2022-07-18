from indic_transliteration import sanscript
from indic_transliteration.sanscript import transliterate


from flask import Flask , jsonify
app =Flask(__name__)

trans = [
    {
        "name":"hin",
        "tl":"rashtriya loka adalata dinamka 08.02.2020 nyayalaya sivila jaja (ju0di0) | nyayika majistreta bisava.n, sitapura| upasthitah ramethara dayala (u0pra0 nyayika seva) adesha vada pukara gaya| abhiyukta upasthita | abhiyukta dvara prakarana mem samsvikrriti prarthana patra prastuta kiya gaya| abhiyukta dvara prastuta svechcha samsvikrrita prarthana patra ko nyayalaya dvara prrichcha ke uparanta svikara kiya gaya| abhiyukta ko prastuta prakarana ke aparadha mem arthadanda se aropita | dandita kiya gaya| abhiyukta dvara arthadanda nyayalaya mem jama kiya gaya| vada avashyaka karyavahi bada anupalana patravali vinashta ho| nyayika majistreta bisavam sitapumra| 0 7009 012374"
    },
 {
         "name":"kan",
         "tl":"nyayalaya, surapura, upasthitaru : shri amaranatha bi.èn‌. apara sivil‌ nyayadhisharu baraya rava daragalu, surapura. sisi. nam.87112014 dinamka ; 18ne sèptèmbar‌ 2019 phir yadidarah karnataka sarkarada para :narayanapura pòlis‌ thanè narayanapura (pratinidhisuvavaru sa.sa.a) 3 viruddhahh 3 jarida aropitaru: 3... ramesha tamdè yamanappa chauna bayi, vayassu: 30 varsha, udyoga : òkkalutana, sa narayanapura. 2. yamanappa tamdè gaddèppa chaunabayi, vayassu: 65 varsha, udyoga : òkkalutana, sa narayanapura. 3. gaddèmma gamda yamanappa chaunabayi, vayassuh 60 varsha, udyoga : hòla- manèkèlaska sah narayanapura. (pratinidhisuvavaru shri. bi.kè.di vakilaru)"

    },

    {
        "name":"guj",
        "tl":"1 phoja.parachu.ari nam.128/2021 650010004442021 a sabarakamtha jillana bija adhika satra nyayadhishashrini adalata samaksha, mukama-himmatanagara phojadari parachurana araja nam.128/2021 amka- arajadara/aropi : daksheshabhai kailasagiri gausvami, u.va.a.33 rahe.pa, gokuladhama, kamkanola roda, kamkanola, ta.himmatanagara, ji.sabarakamtha. ophisa.amarasimhaji shopimgamola, himmatanagara. viruddha samavala : shrisarakara araja : kri.pro. kodani kalama-438 mujaba agotara jamina melavava mate arajadara /aropi tarphe vidhvana vakilashri ema.pi.thakura phariyadi/shri sarakara tarphe vi.pipishri je.esa.jetavata --tharava-- (1) halani a jamina araji arajadara aropi tarphe kimi. pro. kodani ka.438 anvaye agotara jamina mate karavamam avela che. aropi viruddha himmatanagara bi divi. polisa steshana khate parta-e 11209056210415/2021 thi i.pi.ko."
    },

    {
        "name":"mal",
        "tl":"gramanyayalaya kal‍pparra hajar‍ : shri. biju.èm.si, bi è.èl‍, èl‍.èl‍.bi nyayadhikari( chumatala) 2020- dhammant‌ ma4chch‌ masam 16-am tiyuti 1941-yam mant‌ phal‍guna masa m 26-m tiyyati èm.si. 48/19 harajikkari : rina, garuda planreshan‍, pokkaർ kvarattezhr‌ èmili, kal‍pparra. tu (adva.jomol‍ joy‌) ètukakshi : surendran‍, garuda planreshan‍,pokka4 kvar‍ttezhs‌, èmili, kal‍pparra. vakupp‌ : gar‍phika pidanattil‍ ninnum stikalè samrakshikkunna niyamam 2005, 120 vakupp‌. vidhinyayam gar‍hika pidanattil‍ ninnum vanitakalè samrakshikkunnatinulala niyamam, 2005 n‍èra 12-90 vakupp‌ prakaram bodhippichcha harajiyan‌ it‌. 2. mel‍ na34 kes‌ phayalil‍ svikarichchatil‍ pinnè ètrrikakshikk‌ nottis‌ ayachch‌ varuttukayum ètukakshi svantam nilayil‍ kotati munakè hajarayittulalatuman‌. 3. mel‍ na34 kesilè irubhagattin‍èrayum vada~n~nal‍ pariganichcha shesham i k esil‍ anuraj~nanattin‌ sadhyata untann‌ manasilakkiyatinal‍ har‍jikkariyèyum ètrrikakshiyèyum kal‍pparra ligal‍ saർvvisas‌"
    },
    {
        "name":"ori",
        "tl":"kae... 0. 237-2014 7706 1 (“5004 © 27-03-2019 4007 =7utha407dha, 400606 akhimkake ghatha4gha aayayagha18709040) i006u, ©1470455 |- thi ©16000 (764070 940) ©- 55 thisi ghasi sashta ghao~ndu ghapa4705109973 o 64ku 4~nagharu kana 6507~na11. 474nrri 0007 047 o40a81 i~nch‌ 627074096 908 000006700~nai i6~nthu osa kasha~ntaimao0~ngha, oae.64ra 3~na~na 5 gha4chathio~nai, 1. 4ki 0070 gha15070 145~nachu 6094 4704096 = 0 407 ©&-1 7076, 2. 470087 4ka~na040796 ©1096gha 6000 ©chathatha12047dha 27709990 00 007dhu ®©&-2 ©000, 3. o i~nj‌oih nadhta 177406 jha~naksha0u oiamataru 447 0785 0077, 780066692700040. 4. 3 bha~nthih ©00i 4740 7300 4 matara tha64)na ©©-4 7070, 5. 40ma ayusa~na amte 7~naaag hashu 7440 300 401u gha-5 ©006, 70066692700040. 4060000 448060thu 417004 409 =4749gha914009 ~na4,7904. gha0000i000 00*ku 094704ma7mi 1707ra47a 416‌7i90thu 000 ra 4000.64927 00040. (540 ©ra;}0487900400thu aru 4045 04960gha~nu 9074, 270 .498700440) adha. 5. 41. 50. bi, 1 jha 4694, i0 &©04 ®17 sarutha94771a00) 40000mi,"
    },
    {
        "name":"tam",
        "tl":"bhadhiனaravadhu bhèrunaghara ghurraviyal‌ nadhuvar‌ nidhimaனram‌, jas‌ dhavuன‌, jhèனனai-0.. muனனilai dhiru. &. bhashir‌. nabha na, 16 vadhu bhèrunaghara ghurraviyal‌ nadhu va (muzhu bhòrubhbhu) 2021 am‌ andhu jaனvari dhi~nghal‌ 08 am‌ nal‌: (ghuvi.mu.4 irivu 355 னbhadhi) ghabhbhalai a) vazhaghghiன‌ varijhai èn‌: -1260/2020 a) ghurra jhambhava nal‌ - 15.07.2020. 8) ghamma mumaiyiubhavar‌: - ghaval‌ udhavi ayvalar‌ (jhaghju). èn‌.3 mudhdhiyalbhedhdhai ghaval‌ nilaiyam‌. jhèனனai -01. ghurra èn‌.863/2020. i) èdhiri yiன‌ bhèyar‌. vilajham‌ marrum‌. viva~nghal‌ - bhaghghiyam‌, bhè/va:60/2020, gha/bhèzhurughejhaன‌, èn‌. bhuனidha jheviyar‌ dhèru bhinadhbharam‌, jhòdhve, jhèனனai - 01. ivva zhaghghu 23.12.2020 aனru inanidhimaனradhdhil‌ ghobhjhirghu èdhughghabhbhadhdhu aனru. èன‌ muனbhagha irudhi vijharanaighghu vandhabhodhu. ghurra muraiyidhubhavarughghagha dhi ru ghe.jhiva~naனm‌, arajhu ghurradhdhurai udhavi vazhaghghari~nar‌ nilai-2 avarghalum‌, èdhirighghagha. vazhaghghari~nar‌ dhiru. 8. ghurumurdhdhi èனbhavar‌ ajaraghi jhèydha iru dharabhbhu vadha~nghalai ghedhdhum‌, jhadhjhiya~nghal‌ marrum‌ avana~nghalai bharijhilanai jhèydha bhiனனr‌ aனru 06.01.2021 aனru. inandhimaனram‌ vazha~nghum‌ dhirbhu. u ) muraiyidhu jhèyyabhbhadhdha ghurram‌; ghadhandha 25.03.2020m‌ dhedhi madhdhiya marrum‌ manila arajhughal‌ ghòrona noy‌ dhòrru dhadhubhbhu nadhavadhighghaiyagha 144 dhadha i udhdhiravu bhirabhbhighghabhbhadhdhu udhdhiravu amulil‌ rundhu. varuvadhal‌ jhèனனai mavadhdhadhdhil‌ arajhu madhubhaன ghadhaighal‌ adhaighghabhbhadhdhirundha nilaiyil‌, ghadhandha 15.07-2020m‌ dhedhi ghalai 10:15 maniyalavil‌ èdhiri bhaghghiyam‌ èனbhavara vaidhdhirundha. bhaiyil‌ dhala bha0-va~nayara uabhadha-|| 9 dhala 189 3. alavughòndha 1/0. 90205 ura u0ramama -1 59, dhala 160 bhadha alavughòndha 801255 ai~nayara 20abha£ -5 09 marrum‌ bha94a0i aiva ai0aabha - 2108 òrundhadhaghavum‌, èdhiri èndhavidha arajh u anumadhiyum‌. urima௰mum‌ illamal‌ adhayam‌ adhaiyum‌ vidhadhdhil‌ dhiruvallur‌ mavadhdhadhdhil‌ ulla arajhu: madhubhaன ghadhaighal‌ dhirandhirundhal‌ a~nghirundhu madhubh adhdhilghalai va~nghi vandhu adhigha: vilaighghu virbhaனai jhèydha ghurradhdhirghagha, èdhiriyiன‌ midhu bhirivu 4 (1) (2) 14 ghalaன‌ bhadhi: arajhudhdharabhbhil‌ èdhiri mid hu vandha vazhaghghu dhaghghal‌ jhèyyabhbhadhdhulladhu. u) mudhivaன anai - èdhiri bhirivu 4 (1) (8) 116 ghaன‌ bhadhi ghurravali èனru dhirmaனidhdhu. dhibhabhalighghabhbhadhughiradhu. è) adhdhaghaiya dhirbhbhai bhirabhbhighghabhbhadhdha nal‌ - 08.01.2021."
    }

]

@app.route('/lang/<string:l1>')
def get_trans(l1):
    for i in trans:
        if(i['name']==l1):
            result = {
                'tl':i['tl'],
                'name':i["name"]
            }
            result = jsonify(result)
            result.headers.add('Access-Control-Allow-Origin', '*')
            return result




if __name__=='__main__':
    app.run(debug=True)