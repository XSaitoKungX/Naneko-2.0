const Discord = module.require("discord.js");

module.exports = {
  name: "joke",
  description: "Sends a random joke",
  run: async (client, message, args) => {
    var jokes = [
      "Atom betritt eine Bar. Der Barkeeper sagt ihm, er solle sich trennen. Jeder stirbt.",
      'Ein roter Ball sagt zu einem blauen Ball: "Ich kann höher springen als du!" Der blaue Ball sitzt einfach still, weil er ein lebloses Objekt ohne Mund ist.',
      'git commit -m "fix typeo"',
      'git commit -m "once more with feeling"',
      'git commit -m "synergizing backward overflow for upward mobility"', // thanks to 30 Rock
      'Hammer geht in eine Bar. Barkeeper fragt ihn, wie die Arbeit heute gelaufen ist. "Geschafft!"',
      "Ich wünschte, ich könnte Einhörner lieben, aber Liebe ist nicht echt.",
      'Ein Mann kommt in eine Bar und bittet um ein Bier.\nDer Barkeeper ist ein Pferd, schenkt aber trotzdem ein.\nDer Mann sagt: "Das ist kein Bier" und wacht prompt schweißgebadet auf und starrt in die lieblosen Augen seines Partners, der ihn mit einem Messer über dem Kopf beim Schlafen beobachtet.\nDer Mann wacht ein zweites Mal auf und findet sich wieder in der Bar wieder, das Glas mit der Flüssigkeit haltend.\n"Nun, ich werde es trotzdem trinken."\nDas Pferd sagt nichts.\n ⇒ Das ist kein Witz; es ist dein Glück.',
      "Die Ölbagger versuchten vergeblich, die Ölpest zu beseitigen.\nEs war grob.",
      // found and overheard by https://github.com/atomantic
      // this is apparently the Dutch equivalent common-knowledge joke of "why did the chicken cross the road"
      // heard it in high-school from a Dutch exchange student and it blew my mind
      'Eine Maus und ein Elefant gehen über eine Brücke. Die Maus dreht sich zu dem Elefanten um und sagt: "Wir machen viel Lärm.""',
      'Mannnnn, ich habe heute Morgen lange Zeit im Fitnessstudio verbracht.\n ⇒ Wir haben angefangen, das Badezimmer "das Fitnessstudio" zu nennen.',
      'Alter! Wurde am Flughafen festgenommen. Anscheinend schätzt es die Sicherheit nicht, wenn Sie vor dem Einsteigen in ein Flugzeug "Schrotflinte" rufen.',
      "Wissen Sie, was Sie bekommen, wenn Sie ein Kaninchen mit einem Rottweiler kreuzen?\n ⇒ Ein Rottweiler.",
      "Wissen Sie, was Sie bekommen, wenn Sie eine Kuh mit einem Oktopus kreuzen?\n ⇒ Ein Besuch der Ethikkommission und sofortiger Entzug Ihrer Förderung.",
      "Weißt du, warum Entenbabys so weich laufen?\n ⇒ Weil sie kaum laufen können.",
      "Ich habe im Aufzug gefurzt.\n ⇒ Es war auf so vielen Ebenen falsch.",
      "Ich habe einmal einen Gürtel aus Armbanduhren gemacht; `es war eine komplette Zeitverschwendung.",
      'Eine Hirschkuh kommt aus dem Wald, "Das ist das letzte Mal, dass ich das für zwei Dollar mache."',
      "Weißt du, warum Dinosaurier nicht sprechen können?\n ⇒ weil sie tot sind.",
      "Ich habe meinen Thesaurus verloren. Ich finde keine Worte, um zu beschreiben, wie ärgerlich das ist.",
      "Eine Frau betrat eine Bar und bat den Barkeeper um eine Doppeldeutigkeit. Also hat der Barkeeper es ihr gegeben.",
      "Wer den Buchstaben ’b’ in das Wort ’subtil’ steckt, verdient einen Klaps auf die Schulter.",
      "Wessen grausame Idee war es, dass das Wort ’Lisp’ ein ’s’ enthält?",
      "Warum gibt es kein anderes Wort für Thesaurus?",
      "Gibt es ein anderes Wort für Synonym?",
      'Ein Mann stürzt vom Dach eines 20-stöckigen Gebäudes. Die Leute im 10. Stock hören ihn fallen, "So faaaaar so gooooood!"',
      'Ein Junge sagt zu seiner Mutter: "Mama, warum sterben alle in unserer Familie so jung?"\n ⇒ \n"Mutter?"\n\n\n"Mutter?"',
      "Ein Mann geht in einen Beichtstuhl und sagt: \"Vater, ich habe etwas Schreckliches getan. Ich habe einen Mann ermordet. Und ich habe diese schrecklichen Gedanken. Ich möchte noch so viele Menschen töten. Ich weiß nicht, ob ich mich aufhalten kann. Was sollte ich tun? \"\nDer Priester sagt, \"Mein Sohn, die Strafe dafür, eines von Gottes Kindern zu töten, ist ewige Verdammnis. Es wäre ein Narr, jetzt aufzuhören.\"",
      // https://www.reddit.com/r/dadjokes/comments/bw6qrb/before_my_surgery_the_anesthetist_offered_to/
      "Vor der Operation bot mir mein Anästhesist an, mich mit Gas oder einem Bootspaddel zu unterdrücken.\n ⇒ Es war eine Äther/Ruder-Situation.",
      // https://www.reddit.com/r/dadjokes/comments/bxt5u6/a_friend_of_mine_tries_to_impress_girls_by/
      "Mein Freund beeindruckt gerne Mädchen, indem er detaillierte Bilder eines Ford F-150 zeichnet.\n ⇒ Er ist ein Pickup-Künstler.",
      // https://www.reddit.com/r/dadjokes/comments/bxlrbz/my_friend_couldnt_afford_to_pay_his_water_bill/
      'Mein Freund konnte es sich nicht leisten, seine Wasserrechnung zu bezahlen.\n ⇒ Ich habe ihm eine "Gute Besserung"-Karte geschickt.',
      // https://www.reddit.com/r/dadjokes/comments/b8cgvx/of_all_the_inventions_of_the_last_100_years_the/
      "Von allen Erfindungen der letzten 100 Jahre muss die trocken abwischbare Tafel die bemerkenswerteste sein.",
      // https://www.reddit.com/r/dadjokes/comments/bt8h2l/my_wife_screamed_you_havent_listened_to_a_single/
      "Meine Frau hat geschrien \"Sie haben nicht ein einziges Wort gehört, das ich gesagt habe, oder?!\"\n ⇒ Was für eine seltsame Art, ein Gespräch zu beginnen.",
      // https://www.reddit.com/r/dadjokes/comments/8gzvpm/my_wife_is_really_mad_at_the_fact_that_i_have_no/
      "Meine Frau ist wirklich sauer darüber, dass ich keinen Orientierungssinn habe.\n ⇒ Also packte ich meine Sachen und richtig.",
      // https://www.reddit.com/r/dadjokes/comments/ak1x0e/two_drunk_guys_were_about_to_get_into_a_fight_one/
      'Zwei betrunkene Typen wollten sich streiten. Einer zieht eine Linie in den Dreck und sagt: "Wenn du diese Linie überschreitest, schlage ich dir ins Gesicht."\n ⇒ Das war die Pointe.',
      // https://www.reddit.com/r/dadjokes/comments/arizsp/asked_my_date_to_meet_me_at_the_gym_but_she_never/
      "Ich habe mein Date gebeten, mich im Fitnessstudio zu treffen, aber sie ist nie aufgetaucht...\n ⇒ Denke, wir beide werden nicht zusammenpassen",
      // from https://github.com/mycargus
      '"Es tut mir leid" und "Ich entschuldige mich" bedeuten dasselbe ... außer wenn Sie auf einer Beerdigung sind.',
      'Früher dachte ich, das Gehirn sei das wichtigste Organ.\n ⇒  Dann dachte ich: "Schau, was mir das sagt!"',
      "Wenn ich es Ihnen einmal gesagt habe, habe ich es Ihnen tausendmal gesagt: Übertreiben Sie nicht!",
      "Es ist schwer, Kleptomanen Wortspiele zu erklären, weil sie die Dinge immer wörtlich nehmen.",
      "Haben Sie schon von den neuen Cordkissen gehört?\n ⇒  Sie machen überall Schlagzeilen!",
      "Ich fragte mich, warum der Baseball immer größer wurde. Dann hat es mich erwischt.",
      "Ich habe eine Band namens 999 Megabytes gegründet – wir haben noch keinen Gig.",
      "Was ist rot und riecht nach blauer Farbe?\n ⇒ Rote Farbe.",
      "Warum hatte sechs Angst vor sieben? Es war nicht. Zahlen sind nicht empfindungsfähig und daher unfähig, Angst zu empfinden.",
      "Ein Pferd kam in eine Bar. Mehrere Personen standen auf und gingen, als sie die potenzielle Gefahr in der Situation erkannten.",
      "Was ist grün und hat Räder? Gras. Ich habe wegen der Räder gelogen.",
    ];
    await message.channel.send(jokes[Math.floor(Math.random() * jokes.length)]);
  },
};
