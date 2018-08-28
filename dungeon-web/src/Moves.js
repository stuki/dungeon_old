import React, { PureComponent } from 'react';

class Moves extends PureComponent {
    render() {
        return(
    <div>
        <h1>Basic Moves</h1>
        
      <div className='card'>
      <h2>Hack & Slash</h2>
      <p>
            When you <b>attack an enemy in melee</b>,
            roll+Str. On a 10+ you deal your damage to
            the enemy and avoid their attack. At your
            option, you may choose to do +1d6 damage
            but expose yourself to the enemy’s attack.
            On a 7–9, you deal your damage to the
            enemy and the enemy makes an attack
            against you.
        </p>
      </div>
      <div className='card'>
      <h2>Volley</h2>
      <p>
            When you take aim and <b>shoot at an enemy
            at range</b>, roll+Dex. On a 10+ you have a
            clear shot—deal your damage. On a 7–9,
            choose one (whichever you choose you deal
            your damage):
            <ul>
            <li>You have to move to get the shot placing
            you in danger of the GM’s choice</li>
            <li>You have to take what you can get: -1d6
            damage</li>
            <li>You have to take several shots, reducing
            your ammo by one.</li></ul>
      </p>
      </div>
      <div className='card'>
      <h2>Parley</h2>
      <p>
            When you <b>have leverage on a GM
            character and manipulate them</b>, roll+Cha.
            Leverage is something they need or want.
            On a hit they ask you for something and do
            it if you make them a promise first. On a
            7–9, they need some concrete assurance of
            your promise, right now.
      </p>
      </div>
      <div className='card'>
      <h2>Defy Danger</h2>
      <p>
            When you <b>act despite an imminent threat</b>
            or suffer a calamity, say how you deal with
            it and roll. If you do it...
            <ul>
            <li>by powering through, +Str</li>
            <li>by getting out of the way or acting
            fast, +Dex</li>
            <li>by enduring, +Con</li>
            <li>with quick thinking, +Int</li>
            <li>through mental fortitude, +Wis</li>
            <li>sing charm and social grace, +Cha</li></ul>
            On a 10+, you do what you set out to, the
            threat doesn’t come to bear. On a 7–9, you
            stumble, hesitate, or flinch: the GM will
            offer you a worse outcome, hard bargain,
            or ugly choice.
      </p>
      </div>
      <div className='card'>
      <h2>Defend</h2>
      <p>
            When you <b>stand in defense of a person,
            item, or location</b> under attack, roll+Con.
            On a 10+, hold 3. On a 7–9, hold 1. So long
            as you stand in defense, when you or the
            thing you defend is attacked you may
            spend hold, 1 for 1, to choose an option:
            <ul>
            <li>Redirect an attack from the thing you
            defend to yourself</li>
            <li>Halve the attack’s effect or damage</li>
            <li>Open up the attacker to an ally giving
            that ally +1 forward against the attacker</li>
            <li>Deal damage to the attacker equal to
            your level</li></ul>
      </p>
      </div>
      <div className='card'>
      <h2>Discern Realities</h2>
      <p>
            When you <b>closely study a situation or
            person</b>, roll+Wis. On a 10+ ask the GM
            three questions from the list below. On a
            7–9 ask only one. Take +1 forward when
            acting on the answers.
            <ul>
            <li>What happened here recently?</li>
            <li>What is about to happen?</li>
            <li>What should I be on the lookout for?</li>
            <li>What here is useful or valuable to me?</li>
            <li>Who’s really in control here?</li>
            <li>What here is not what it appears to be?</li></ul>
      </p>
      </div>
      <div className='card'>
      <h2>Spout Lore</h2>
      <p>
            When you <b>consult your accumulated
            knowledge about something</b>, roll+Int. On
            a 10+ the GM will tell you something
            interesting and useful about the subject
            relevant to your situation. On a 7–9 the GM
            will only tell you something interesting 
            —it’s on you to make it useful. The GM
            might ask you “How do you know this?”
            Tell them the truth, now.
      </p>
      </div>
      <div className='card'>
      <h2>Aid or Interfere</h2>
      <p>
            When you <b>help or hinder someone you
            have a Bond with</b>, roll+Bond with them. On
            a hit they take +1 or -2, your choice. On a
            7–9 you also expose yourself to danger,
            retribution, or cost.
      </p>
      </div>
      <h1>Special Moves</h1>
      <div className='card'>
      <h2>Last Breath</h2>
      <p>
            When you’re dying you catch a glimpse of
            what lies beyond the Black Gates of Death’s
            Kingdom (the GM will describe it). Then
            roll (just roll, +nothing — yeah, Death
            doesn’t care how tough or cool you are). On
            a 10+ you’ve cheated death— you’re in a
            bad spot but you’re still alive. On a 7–9
            Death will offer you a bargain. Take it and
            stabilize or refuse and pass beyond the
            Black Gates into whatever fate awaits you.
            On a miss, your fate is sealed. You’re
            marked as Death’s own and you’ll cross the
            threshold soon. The GM will tell you when.
      </p>
      </div>
      <div className='card'>
      <h2>Encumbrance</h2>
      <p>
            When you <b>make a move while carrying
            weight up to or equal to Load</b>, you’re fine.
            When you make a move while carrying
            weight equal to load+1 or load+2, you take
            -1. When you make a move while carrying
            weight greater than load+2, you have a
            choice: drop at least 1 weight and roll at -1,
            or automatically fail.
      </p>
      </div>
      <div className='card'>
      <h2>Make Camp</h2>
      <p>
            When you <b>settle in to rest consume a
            ration</b>; If you’re somewhere dangerous
            decide the watch order as well. If you have
            enough XP you may Level Up. When you
            wake from at least a few uninterrupted
            hours of sleep heal damage equal to half
            your max HP.
      </p>
      </div>
      <div className='card'>
      <h2>Take Watch</h2>
      <p>
            When you’re <b>on watch and something
            approaches the camp</b>, roll+Wis. On a 10+
            you’re able to wake the camp and prepare a
            response, the camp takes +1 forward. On a
            7–9 you react just a moment too late; the
            camp is awake but hasn’t had time to
            prepare. You have weapons and armor but
            little else. On a miss whatever lurks outside
            the campfire’s light has the drop on you.
      </p>
      </div>
      <div className='card'>
      <h2>Bolster</h2>
      <p>
            When you <b>spend your leisure time in
            study, meditation, or hard practice</b>, you
            gain preparation. If you prepare for a week
            or two, 1 preparation. If you prepare for a
            month or longer, 3 preparation. When your
            preparation pays off spend 1 preparation
            for +1 to any roll. You can only spend one
            preparation per roll.

      </p>
      </div>
      <div className='card'>
      <h2>Supply</h2>
      <p>
            When you go to <b>buy something with
            money on hand</b>, if it’s something readily
            available in the settlement you’re in, you
            can buy it at market price. If it’s something
            special, beyond what’s usually available
            here, or non-mundane, roll+Cha. On a 10+
            you find what you’re looking for at a fair
            price. On a 7–9 you’ll have to pay more or
            settle for something similar.
      </p>
      </div>
      <div className='card'>
      <h2>Undertake A Perilous Journey</h2>
      <p>
            When you <b>travel through hostile territory</b>,
            choose one member of the party to act as
            trailblazer, one to scout ahead, and one to
            be quartermaster (the same character
            cannot have two jobs). If you don’t have
            enough party members or choose not to
            assign a job, treat that job as if it had
            rolled a 6. Each character with a job to do
            rolls+Wis. On a 10+ the quartermaster
            reduces the number of rations required by
            one. On a 10+ the trailblazer reduces the
            amount of time it takes to reach your
            destination (the GM will say by how much).
            On a 10+ the scout will spot any trouble
            quick enough to let you get the drop on it.
            On a 7–9 each roles performs their job as
            expected: the normal number of rations are
            consumed, the journey takes about as long
            as expected, no one gets the drop on you
            but you don’t get the drop on them either.
      </p>
      </div>
      <div className='card'>
      <h2>Recover</h2>
      <p>
            When you <b>do nothing but rest in comfort
            and safety</b> after a day of rest you recover
            all your HP. After three days of rest you
            remove one debility of your choice. If
            you’re under the care of a healer (magical
            or otherwise) you heal a debility for every
            two days of rest instead.
      </p>
      </div>
      <div className='card'>
      <h2>Carouse</h2>
      <p>
            When you <b>return triumphant and throw a
            big party</b>, spend 100 coin and roll + extra
            100s of coin spent. On a 10+ choose 3. On a
            7–9 choose 1. On a miss, you still choose
            one, but things get really out of hand.
            <ul>
            <li>You befriend a useful NPC</li>
            <li>You hear rumors of an opportunity</li>
            <li>You gain useful information</li>
            <li>You are not entangled, ensorcelled,
            or tricked</li></ul>
      </p>
      </div>
      <div className='card'>
      <h2>Recruit</h2>
      <p>
            When you <b>put out word that you’re
            looking to hire help</b>, roll. If you make it
            known...
            <ul>
            <li>...that your pay is generous, take +1</li>
            <li>...what you’re setting out to do, take +1</li>
            <li>...that they’ll get a share of whatever you find, take +1</li>
            </ul>
            If you have a useful reputation around
            these parts take an additional +1. On a 10+
            you’ve got your pick of a number of skilled
            applicants, your choice who you hire, no
            penalty for not taking them along. On a 7–9
            you’ll have to settle for someone close or
            turn them away. On a miss someone
            influential and ill-suited declares they’d
            like to come along (a foolhardy youth, a
            loose-cannon, or a veiled enemy, for
            example), bring them and take the
            consequences or turn them away. If you
            turn away applicants you take -1 forward
            to Recruit
      </p>
      </div>
      <div className='card'>
      <h2>End Of Session</h2>
      <p>
            When you <b>reach the end of a session</b>,
            choose one your bonds that you feel is
            resolved (completely explored, no longer
            relevant, or otherwise). Ask the player of
            the character you have the bond with if
            they agree. If they do, mark XP and write a
            new bond with whomever you wish.
            Once bonds have been updated look at your
            alignment. If you fulfilled that alignment at
            least once this session, mark XP. Then
            answer these three questions as a group:
            <ul><li>Did we learn something new and
            important about the world?</li>
            <li>Did we overcome a notable monster or
            enemy?</li>
            <li>Did we loot a memorable treasure?
            For each “yes” answer everyone marks XP.</li></ul>
      </p>
      </div>
      <div className='card'>
      <h2>Level Up</h2>
      <p>
            When you have <b>downtime (hours or days)
            and XP equal to (or greater than) your
            current level+7</b>, subtract your current level
            +7 from your XP, increase your level by 1,
            and choose a new advanced move from
            your class. If you are the wizard, you also
            get to add a new spell to your spellbook.
            Choose one of your stats and increase it
            by 1 (this may change your modifier).
            Note that changing your Constitution
            increases your maximum and current HP.
            Ability scores can’t go higher than 18.
      </p>
      </div>
      <div className='card'>
      <h2>Outstanding Warrants</h2>
      <p>
            When you <b>return to a civilized place in
            which you’ve caused trouble before</b>,
            roll+Cha. On a hit, word has spread of your
            deeds and everyone recognizes you. On a
            7–9, that, and, the GM chooses a
            complication:
            <ul><li>The local constabulary has a warrant out
            for your arrest</li>
            <li>Someone has put a price on your head</li>
            <li>Someone important to you has been put
            in a bad spot as a result of your actions</li></ul>
      </p>
      </div>
    </div>
    )
    }
  }


export default Moves;