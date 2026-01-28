
import { Hero, Role, Tier, Guide, NewsItem } from './types';

export const HEROES: Hero[] = [
  {
    id: 'aamon',
    name: 'Aamon',
    role: Role.ASSASSIN,
    tier: Tier.A,
    image: 'https://images.unsplash.com/photo-1589241062272-c0a000072dfa?q=80&w=400&h=300&auto=format&fit=crop',
    build: {
      items: ["Arcane Boots", "Genius Wand", "Glowing Wand", "Feather of Heaven", "Holy Crystal", "Divine Glaive"],
      emblem: 'Mage (Rupture, Bargain Hunter, Lethal Ignition)',
      spell: 'Retribution'
    },
    strengths: ['Invisibility', 'Burst Damage'],
    weaknesses: ['Weak to AOE', 'Energy Dependent']
  },
  {
    id: 'akai',
    name: 'Akai',
    role: Role.TANK,
    tier: Tier.A,
    image: 'https://images.unsplash.com/photo-1590055531764-9eed24100a01?q=80&w=400&h=300&auto=format&fit=crop',
    build: {
      items: ["Tough Boots", "Cursed Helmet", "Guardian Helmet", "Dominance Ice", "Antique Cuirass", "Immortality"],
      emblem: 'Tank (Vitality, Tenacity, Concussive Blast)',
      spell: 'Retribution'
    },
    strengths: ['Crowd Control', 'Displacement'],
    weaknesses: ['Ult can be hard to control']
  },
  {
    id: 'aldous',
    name: 'Aldous',
    role: Role.FIGHTER,
    tier: Tier.B,
    image: 'https://images.unsplash.com/photo-1533331639-74f1863c7b3c?q=80&w=400&h=300&auto=format&fit=crop',
    build: {
      items: ["Warrior Boots", "Thunder Belt", "Brute Force Breastplate", "Malefic Roar", "Athena's Shield", "Immortality"],
      emblem: 'Fighter (Firmness, Festival of Blood, Brave Smite)',
      spell: 'Flicker'
    },
    strengths: ['Infinite Scaling', 'Global Vision'],
    weaknesses: ['Weak Early Game', 'Needs Stacks']
  },
  {
    id: 'alice',
    name: 'Alice',
    role: Role.MAGE,
    tier: Tier.A,
    image: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=400&h=300&auto=format&fit=crop',
    build: {
      items: ["Demon Shoes", "Clock of Destiny", "Lightning Truncheon", "Concentrated Energy", "Holy Crystal", "Winter Truncheon"],
      emblem: 'Mage (Agility, Bargain Hunter, Impure Rage)',
      spell: 'Flicker'
    },
    strengths: ['Extreme Sustain', 'High AOE Damage'],
    weaknesses: ['Mana Intensive', 'Weak to Anti-heal']
  },
  {
    id: 'alpha',
    name: 'Alpha',
    role: Role.FIGHTER,
    tier: Tier.A,
    image: 'https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?q=80&w=400&h=300&auto=format&fit=crop',
    build: {
      items: ["Warrior Boots", "War Axe", "Bloodlust Axe", "Hunter Strike", "Brute Force Breastplate", "Oracle"],
      emblem: 'Fighter (Firmness, Festival of Blood, Brave Smite)',
      spell: 'Petrify'
    },
    strengths: ['True Damage', 'Strong Sustain'],
    weaknesses: ['Vulnerable to Burst']
  },
  {
    id: 'alucard',
    name: 'Alucard',
    role: Role.FIGHTER,
    tier: Tier.C,
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=400&h=300&auto=format&fit=crop',
    build: {
      items: ["Warrior Boots", "Hunter Strike", "Endless Battle", "Malefic Roar", "Berserker's Fury", "Blade of Despair"],
      emblem: 'Assassin (Rupture, Master Assassin, Lethal Ignition)',
      spell: 'Retribution'
    },
    strengths: ['Lifesteal', 'Mobility'],
    weaknesses: ['Very vulnerable to CC']
  },
  {
    id: 'angela',
    name: 'Angela',
    role: Role.SUPPORT,
    tier: Tier.S,
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=400&h=300&auto=format&fit=crop',
    build: {
      items: ["Magic Shoes (Favor)", "Flask of the Oasis", "Fleeting Time", "Necklace of Durance", "Ice Queen Wand", "Oracle"],
      emblem: 'Support (Agility, Pull Yourself Together, Focusing Mark)',
      spell: 'Flicker'
    },
    strengths: ['Global Help', 'Massive Shields'],
    weaknesses: ['Low Health', 'Team Dependent']
  },
  {
    id: 'argus',
    name: 'Argus',
    role: Role.FIGHTER,
    tier: Tier.C,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=400&h=300&auto=format&fit=crop',
    build: {
      items: ["Swift Boots", "Corrosion Scythe", "Demon Hunter Sword", "Golden Staff", "Malefic Roar", "Berserker's Fury"],
      emblem: 'Fighter (Fatal, Master Assassin, Quantum Charge)',
      spell: 'Inspire'
    },
    strengths: ['Invulnerability Ult', 'Burst Attack'],
    weaknesses: ['Weak to CC', 'Useless without Ult']
  },
  {
    id: 'arlott',
    name: 'Arlott',
    role: Role.FIGHTER,
    tier: Tier.S,
    image: 'https://images.unsplash.com/photo-1535970790326-70e6030c6a5a?q=80&w=400&h=300&auto=format&fit=crop',
    build: {
      items: ["Warrior Boots", "Hunter Strike", "Endless Battle", "Brute Force Breastplate", "Oracle", "Immortality"],
      emblem: 'Fighter (Firmness, Festival of Blood, Brave Smite)',
      spell: 'Petrify'
    },
    strengths: ['Infinite Dashes', 'Strong Sustain'],
    weaknesses: ['Needs Setup', 'Easily Kited']
  },
  {
    id: 'atlas',
    name: 'Atlas',
    role: Role.TANK,
    tier: Tier.A,
    image: 'https://images.unsplash.com/photo-1605895617484-21957248bc3c?q=80&w=400&h=300&auto=format&fit=crop',
    build: {
      items: ["Tough Boots", "Dominance Ice", "Antique Cuirass", "Athena's Shield", "Fleeting Time", "Immortality"],
      emblem: 'Tank (Vitality, Tenacity, Focusing Mark)',
      spell: 'Flicker'
    },
    strengths: ['Group CC', 'Mobility'],
    weaknesses: ['Predictable', 'Weak to Purify']
  },
  {
    id: 'badang',
    name: 'Badang',
    role: Role.FIGHTER,
    tier: Tier.B,
    image: 'https://images.unsplash.com/photo-1560253023-3ee71f1f9bc0?q=80&w=400&h=300&auto=format&fit=crop',
    build: {
      items: ["Warrior Boots", "Demon Hunter Sword", "Golden Staff", "Corrosion Scythe", "Malefic Roar", "Blade of Despair"],
      emblem: 'Fighter (Thrill, Master Assassin, Quantum Charge)',
      spell: 'Flicker'
    },
    strengths: ['Wall Stun', 'High Attack Speed'],
    weaknesses: ['Ult can be dodged', 'Squishy for Fighter']
  },
  {
    id: 'balmond',
    name: 'Balmond',
    role: Role.FIGHTER,
    tier: Tier.B,
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=400&h=300&auto=format&fit=crop',
    build: {
      items: ["Warrior Boots", "Cursed Helmet", "Guardian Helmet", "Dominance Ice", "War Axe", "Immortality"],
      emblem: 'Tank (Vitality, Tenacity, Concussive Blast)',
      spell: 'Retribution'
    },
    strengths: ['True Damage Ult', 'Early Dominance'],
    weaknesses: ['Kitable', 'Late Game Falloff']
  },
  {
    id: 'barats',
    name: 'Barats',
    role: Role.TANK,
    tier: Tier.S,
    image: 'https://images.unsplash.com/photo-1580234811497-9bd7fd2f357b?q=80&w=400&h=300&auto=format&fit=crop',
    build: {
      items: ["Tough Boots", "Guardian Helmet", "Cursed Helmet", "Antique Cuirass", "Radiant Armor", "Thunder Belt"],
      emblem: 'Tank (Vitality, Tenacity, Brave Smite)',
      spell: 'Retribution'
    },
    strengths: ['High HP', 'Suppression CC'],
    weaknesses: ['Stack Dependent']
  },
  {
    id: 'beatrix',
    name: 'Beatrix',
    role: Role.MARKSMAN,
    tier: Tier.A,
    image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=400&h=300&auto=format&fit=crop',
    build: {
      items: ["Warrior Boots", "Blade of Despair", "Hunter Strike", "Malefic Roar", "Blade of Heptaseas", "Wind of Nature"],
      emblem: 'Assassin (Rupture, Master Assassin, Quantum Charge)',
      spell: 'Flicker'
    },
    strengths: ['Versatility', 'AOE Ult'],
    weaknesses: ['Complex Controls', 'Requires Aim']
  },
  {
    id: 'benedetta',
    name: 'Benedetta',
    role: Role.ASSASSIN,
    tier: Tier.S,
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=400&h=300&auto=format&fit=crop',
    build: {
      items: ["Warrior Boots", "Bloodlust Axe", "Hunter Strike", "Oracle", "Blade of Despair", "Immortality"],
      emblem: 'Fighter (Thrill, Festival of Blood, Brave Smite)',
      spell: 'Petrify'
    },
    strengths: ['Constant Mobility', 'Counter Skills'],
    weaknesses: ['High Precision Needed']
  },
  {
    id: 'brody',
    name: 'Brody',
    role: Role.MARKSMAN,
    tier: Tier.A,
    image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=400&h=300&auto=format&fit=crop',
    build: {
      items: ["Warrior Boots", "Blade of Heptaseas", "Hunter Strike", "Malefic Roar", "Antique Cuirass", "Blade of Despair"],
      emblem: 'Assassin (Rupture, Master Assassin, Quantum Charge)',
      spell: 'Flicker'
    },
    strengths: ['Burst MM', 'Laning Strength'],
    weaknesses: ['Slow Attack Speed']
  },
  {
    id: 'chou',
    name: 'Chou',
    role: Role.FIGHTER,
    tier: Tier.A,
    image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=400&h=300&auto=format&fit=crop',
    build: {
      items: ["Warrior Boots", "Blade of Heptaseas", "Hunter Strike", "Blade of Despair", "Malefic Roar", "Rose Gold Meteor"],
      emblem: 'Assassin (Rupture, Master Assassin, Lethal Ignition)',
      spell: 'Flicker'
    },
    strengths: ['Lockdown', 'High Outplay'],
    weaknesses: ['Hard to Master']
  },
  {
    id: 'claude',
    name: 'Claude',
    role: Role.MARKSMAN,
    tier: Tier.S,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=400&h=300&auto=format&fit=crop',
    build: {
      items: ["Demon Shoes", "Demon Hunter Sword", "Golden Staff", "Corrosion Scythe", "Wind of Nature", "Immortality"],
      emblem: 'Marksman (Fatal, Weapon Master, Quantum Charge)',
      spell: 'Vengeance'
    },
    strengths: ['Mobility', 'Late Game Teamfight'],
    weaknesses: ['Item Dependent']
  },
  {
    id: 'diggie',
    name: 'Diggie',
    role: Role.SUPPORT,
    tier: Tier.S,
    image: 'https://images.unsplash.com/photo-1444464666168-49d633b867ad?q=80&w=400&h=300&auto=format&fit=crop',
    build: {
      items: ["Magic Shoes (Encourage)", "Fleeting Time", "Flask of the Oasis", "Athena's Shield", "Antique Cuirass", "Immortality"],
      emblem: 'Support (Agility, Pull Yourself Together, Focusing Mark)',
      spell: 'Flicker'
    },
    strengths: ['CC Cleanse', 'Vision Provider'],
    weaknesses: ['Squishy', 'Egg Form is passive']
  },
  {
    id: 'dyrroth',
    name: 'Dyrroth',
    role: Role.FIGHTER,
    tier: Tier.A,
    image: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=400&h=300&auto=format&fit=crop',
    build: {
      items: ["Warrior Boots", "Hunter Strike", "Blade of Heptaseas", "Sea Halberd", "Malefic Roar", "Brute Force Breastplate"],
      emblem: 'Assassin (Rupture, Master Assassin, Lethal Ignition)',
      spell: 'Flicker'
    },
    strengths: ['Armor Shred', 'Early Dominance'],
    weaknesses: ['Predictable Ult', 'Easily kited']
  },
  {
    id: 'estes',
    name: 'Estes',
    role: Role.SUPPORT,
    tier: Tier.A,
    image: 'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?q=80&w=400&h=300&auto=format&fit=crop',
    build: {
      items: ["Tough Boots (Favor)", "Flask of the Oasis", "Enchanted Talisman", "Dominance Ice", "Antique Cuirass", "Oracle"],
      emblem: 'Support (Vitality, Pull Yourself Together, Focusing Mark)',
      spell: 'Flicker'
    },
    strengths: ['Infinite Heals', 'Sustain King'],
    weaknesses: ['No mobility', 'Vulnerable to Anti-heal']
  },
  {
    id: 'fanny',
    name: 'Fanny',
    role: Role.ASSASSIN,
    tier: Tier.S,
    image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=400&h=300&auto=format&fit=crop',
    build: {
      items: ["Tough Boots", "Blade of Heptaseas", "Hunter Strike", "Malefic Roar", "Antique Cuirass", "Blade of Despair"],
      emblem: 'Assassin (Rupture, Master Assassin, Lethal Ignition)',
      spell: 'Retribution'
    },
    strengths: ['Highest Mobility', 'Early Game Dominance'],
    weaknesses: ['Extremely Hard', 'Blue Buff Reliant']
  },
  {
    id: 'faramis',
    name: 'Faramis',
    role: Role.SUPPORT,
    tier: Tier.S,
    image: 'https://images.unsplash.com/photo-1516245834210-c4c142787335?q=80&w=400&h=300&auto=format&fit=crop',
    build: {
      items: ["Magic Shoes", "Enchanted Talisman", "Fleeting Time", "Glowing Wand", "Holy Crystal", "Divine Glaive"],
      emblem: 'Support (Agility, Pull Yourself Together, Impure Rage)',
      spell: 'Flicker'
    },
    strengths: ['Extra Life Ult', 'Fast Respawn'],
    weaknesses: ['Ult timing is crucial']
  },
  {
    id: 'franco',
    name: 'Franco',
    role: Role.TANK,
    tier: Tier.A,
    image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=400&h=300&auto=format&fit=crop',
    build: {
      items: ["Rapid Boots", "Dominance Ice", "Oracle", "Athena's Shield", "Antique Cuirass", "Thunder Belt"],
      emblem: 'Support (Agility, Pull Yourself Together, Focusing Mark)',
      spell: 'Flicker'
    },
    strengths: ['Suppression', 'Pick-off'],
    weaknesses: ['Inconsistent Hook', 'Less Bulky']
  },
  {
    id: 'fredrinn',
    name: 'Fredrinn',
    role: Role.FIGHTER,
    tier: Tier.S,
    image: 'https://images.unsplash.com/photo-1580234811497-9bd7fd2f357b?q=80&w=400&h=300&auto=format&fit=crop',
    build: {
      items: ["Tough Boots", "Cursed Helmet", "Guardian Helmet", "Antique Cuirass", "Radiant Armor", "Immortality"],
      emblem: 'Tank (Vitality, Tenacity, Brave Smite)',
      spell: 'Retribution'
    },
    strengths: ['Massive HP Pool', 'Taunt CC'],
    weaknesses: ['Melee Only']
  },
  {
    id: 'gusion',
    name: 'Gusion',
    role: Role.ASSASSIN,
    tier: Tier.A,
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=400&h=300&auto=format&fit=crop',
    build: {
      items: ["Arcane Boots", "Genius Wand", "Glowing Wand", "Holy Crystal", "Divine Glaive", "Blood Wings"],
      emblem: 'Mage (Rupture, Bargain Hunter, Lethal Ignition)',
      spell: 'Retribution'
    },
    strengths: ['Burst Damage', 'Flashy Combos'],
    weaknesses: ['Linear Pattern', 'Weak to CC']
  },
  {
    id: 'harith',
    name: 'Harith',
    role: Role.MAGE,
    tier: Tier.S,
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=400&h=300&auto=format&fit=crop',
    build: {
      items: ["Magic Shoes", "Feather of Heaven", "Starlium Scythe", "Holy Crystal", "Concentrated Energy", "Blood Wings"],
      emblem: 'Mage (Agility, Bargain Hunter, Impure Rage)',
      spell: 'Purify'
    },
    strengths: ['Shielding', 'Mobility'],
    weaknesses: ['Weak to Hard CC']
  },
  {
    id: 'hayabusa',
    name: 'Hayabusa',
    role: Role.ASSASSIN,
    tier: Tier.A,
    image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=400&h=300&auto=format&fit=crop',
    build: {
      items: ["Swift Boots", "Hunter Strike", "Malefic Roar", "Blade of Despair", "Endless Battle", "Sea Halberd"],
      emblem: 'Assassin (Rupture, Master Assassin, Lethal Ignition)',
      spell: 'Retribution'
    },
    strengths: ['Single Target Burst', 'Shadow Mobility'],
    weaknesses: ['Minion Interference']
  },
  {
    id: 'karrie',
    name: 'Karrie',
    role: Role.MARKSMAN,
    tier: Tier.S,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=400&h=300&auto=format&fit=crop',
    build: {
      items: ["Tough Boots", "Golden Staff", "Demon Hunter Sword", "Endless Battle", "Wind of Nature", "Brute Force Breastplate"],
      emblem: 'Marksman (Fatal, Weapon Master, Quantum Charge)',
      spell: 'Flicker'
    },
    strengths: ['True Damage', 'Tank Shredder'],
    weaknesses: ['Short Range']
  },
  {
    id: 'layla',
    name: 'Layla',
    role: Role.MARKSMAN,
    tier: Tier.C,
    image: 'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?q=80&w=400&h=300&auto=format&fit=crop',
    build: {
      items: ["Swift Boots", "Windtalker", "Berserker's Fury", "Haas's Claws", "Malefic Roar", "Rose Gold Meteor"],
      emblem: 'Marksman (Fatal, Weapon Master, Quantum Charge)',
      spell: 'Flicker'
    },
    strengths: ['Long Range', 'High Crit'],
    weaknesses: ['No Mobility', 'Easily Dived']
  },
  {
    id: 'ling',
    name: 'Ling',
    role: Role.ASSASSIN,
    tier: Tier.S,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=400&h=300&auto=format&fit=crop',
    build: {
      items: ["Tough Boots", "Berserker's Fury", "Windtalker", "Endless Battle", "Malefic Roar", "Blade of Despair"],
      emblem: 'Assassin (Thrill, Master Assassin, Lethal Ignition)',
      spell: 'Retribution'
    },
    strengths: ['Elite Mobility', 'High Burst'],
    weaknesses: ['Energy Management']
  },
  {
    id: 'lunox',
    name: 'Lunox',
    role: Role.MAGE,
    tier: Tier.S,
    image: 'https://images.unsplash.com/photo-1527685216219-c7da77b93e7a?q=80&w=400&h=300&auto=format&fit=crop',
    build: {
      items: ["Demon Shoes", "Clock of Destiny", "Lightning Truncheon", "Divine Glaive", "Holy Crystal", "Concentrated Energy"],
      emblem: 'Mage (Rupture, Bargain Hunter, Impure Rage)',
      spell: 'Flicker'
    },
    strengths: ['Tank Shredder', 'I-frames'],
    weaknesses: ['High Difficulty']
  },
  {
    id: 'martis',
    name: 'Martis',
    role: Role.FIGHTER,
    tier: Tier.S,
    image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=400&h=300&auto=format&fit=crop',
    build: {
      items: ["Tough Boots", "Hunter Strike", "Dominance Ice", "Antique Cuirass", "Sea Halberd", "Guardian Helmet"],
      emblem: 'Fighter (Thrill, Festival of Blood, Brave Smite)',
      spell: 'Retribution'
    },
    strengths: ['CC Immunity', 'Execution'],
    weaknesses: ['Weak Late Game']
  },
  {
    id: 'mathilda',
    name: 'Mathilda',
    role: Role.SUPPORT,
    tier: Tier.S,
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=400&h=300&auto=format&fit=crop',
    build: {
      items: ["Tough Boots (Encourage)", "Flask of the Oasis", "Oracle", "Antique Cuirass", "Athena's Shield", "Immortality"],
      emblem: 'Support (Agility, Pull Yourself Together, Focusing Mark)',
      spell: 'Flicker'
    },
    strengths: ['Team Mobility', 'Strong Early Ganks'],
    weaknesses: ['Late Game Falloff']
  },
  {
    id: 'nana',
    name: 'Nana',
    role: Role.MAGE,
    tier: Tier.B,
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=400&h=300&auto=format&fit=crop',
    build: {
      items: ["Arcane Boots", "Lightning Truncheon", "Holy Crystal", "Genius Wand", "Divine Glaive", "Blood Wings"],
      emblem: 'Mage (Rupture, Bargain Hunter, Lethal Ignition)',
      spell: 'Flameshot'
    },
    strengths: ['Second Life', 'Polymorph CC'],
    weaknesses: ['Squishy', 'Skillshot Dependent']
  },
  {
    id: 'nolan',
    name: 'Nolan',
    role: Role.ASSASSIN,
    tier: Tier.S,
    image: 'https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?q=80&w=400&h=300&auto=format&fit=crop',
    build: {
      items: ["Warrior Boots", "Hunter Strike", "Blade of Heptaseas", "Malefic Roar", "Blade of Despair", "Immortality"],
      emblem: 'Assassin (Rupture, Seasoned Hunter, Lethal Ignition)',
      spell: 'Retribution'
    },
    strengths: ['Insane Jungle Clear', 'Cleanse Ult'],
    weaknesses: ['Squishy', 'Combo Reliant']
  },
  {
    id: 'paquito',
    name: 'Paquito',
    role: Role.FIGHTER,
    tier: Tier.S,
    image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=400&h=300&auto=format&fit=crop',
    build: {
      items: ["Tough Boots", "Hunter Strike", "Blade of Heptaseas", "Malefic Roar", "Brute Force Breastplate", "Bloodlust Axe"],
      emblem: 'Fighter (Thrill, Festival of Blood, Brave Smite)',
      spell: 'Flicker'
    },
    strengths: ['Combo Burst', 'High Mobility'],
    weaknesses: ['Squishy for Fighter']
  },
  {
    id: 'ruby',
    name: 'Ruby',
    role: Role.FIGHTER,
    tier: Tier.A,
    image: 'https://images.unsplash.com/photo-1533331639-74f1863c7b3c?q=80&w=400&h=300&auto=format&fit=crop',
    build: {
      items: ["Warrior Boots", "War Axe", "Hunter Strike", "Dominance Ice", "Oracle", "Haas's Claws"],
      emblem: 'Fighter (Firmness, Festival of Blood, Brave Smite)',
      spell: 'Flicker'
    },
    strengths: ['Lifesteal', 'Massive AOE CC'],
    weaknesses: ['Low Base Damage']
  },
  {
    id: 'saber',
    name: 'Saber',
    role: Role.ASSASSIN,
    tier: Tier.B,
    image: 'https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?q=80&w=400&h=300&auto=format&fit=crop',
    build: {
      items: ["Warrior Boots", "Blade of Heptaseas", "Hunter Strike", "Blade of Despair", "Malefic Roar", "Rose Gold Meteor"],
      emblem: 'Assassin (Rupture, Master Assassin, Lethal Ignition)',
      spell: 'Execute'
    },
    strengths: ['Target Lockdown', 'Early Burst'],
    weaknesses: ['Useless after Ult']
  },
  {
    id: 'sun',
    name: 'Sun',
    role: Role.FIGHTER,
    tier: Tier.C,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=400&h=300&auto=format&fit=crop',
    build: {
      items: ["Swift Boots", "Corrosion Scythe", "Demon Hunter Sword", "Golden Staff", "War Axe", "Malefic Roar"],
      emblem: 'Fighter (Fatal, Master Assassin, Quantum Charge)',
      spell: 'Inspire'
    },
    strengths: ['Fast Pushing', 'Confusion with clones'],
    weaknesses: ['Weak Early', 'Vulnerable to AOE']
  },
  {
    id: 'terizla',
    name: 'Terizla',
    role: Role.FIGHTER,
    tier: Tier.S,
    image: 'https://images.unsplash.com/photo-1580234811497-9bd7fd2f357b?q=80&w=400&h=300&auto=format&fit=crop',
    build: {
      items: ["Warrior Boots", "Bloodlust Axe", "Dominance Ice", "Antique Cuirass", "Athena's Shield", "Blade Armor"],
      emblem: 'Fighter (Firmness, Festival of Blood, Brave Smite)',
      spell: 'Flicker'
    },
    strengths: ['Natural Bulk', 'AOE Control'],
    weaknesses: ['Very Slow Attack']
  },
  {
    id: 'tigreal',
    name: 'Tigreal',
    role: Role.TANK,
    tier: Tier.S,
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=400&h=300&auto=format&fit=crop',
    build: {
      items: ["Warrior Boots (Conceal)", "Dominance Ice", "Antique Cuirass", "Athena's Shield", "Blade Armor", "Immortality"],
      emblem: 'Tank (Vitality, Tenacity, Concussive Blast)',
      spell: 'Flicker'
    },
    strengths: ['Game-changing Ult', 'Heavy Displacement'],
    weaknesses: ['Ult can be interrupted']
  },
  {
    id: 'valentina',
    name: 'Valentina',
    role: Role.MAGE,
    tier: Tier.S,
    image: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=400&h=300&auto=format&fit=crop',
    build: {
      items: ["Magic Shoes", "Clock of Destiny", "Lightning Truncheon", "Enchanted Talisman", "Divine Glaive", "Holy Crystal"],
      emblem: 'Mage (Agility, Bargain Hunter, Impure Rage)',
      spell: 'Flicker'
    },
    strengths: ['Ultimate Stealing', 'High Sustain'],
    weaknesses: ['Enemy Dependent']
  },
  {
    id: 'wanwan',
    name: 'Wanwan',
    role: Role.MARKSMAN,
    tier: Tier.S,
    image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=400&h=300&auto=format&fit=crop',
    build: {
      items: ["Corrosion Scythe", "Demon Hunter Sword", "Golden Staff", "Windtalker", "Malefic Roar", "Wind of Nature"],
      emblem: 'Marksman (Fatal, Weapon Master, Weakness Finder)',
      spell: 'Inspire'
    },
    strengths: ['Untargetable Ult', 'Mobility'],
    weaknesses: ['Hard to Trigger Ult']
  },
  {
    id: 'yuzhong',
    name: 'Yu Zhong',
    role: Role.FIGHTER,
    tier: Tier.S,
    image: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=400&h=300&auto=format&fit=crop',
    build: {
      items: ["Warrior Boots", "Hunter Strike", "War Axe", "Dominance Ice", "Oracle", "Immortality"],
      emblem: 'Fighter (Firmness, Festival of Blood, Brave Smite)',
      spell: 'Petrify'
    },
    strengths: ['Backline Diver', 'Passive Sustain'],
    weaknesses: ['Long Cooldowns']
  },
  {
    id: 'zilong',
    name: 'Zilong',
    role: Role.FIGHTER,
    tier: Tier.B,
    image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=400&h=300&auto=format&fit=crop',
    build: {
      items: ["Swift Boots", "Windtalker", "Berserker's Fury", "Great Dragon Spear", "Malefic Roar", "Blade of Despair"],
      emblem: 'Assassin (Fatal, Master Assassin, Quantum Charge)',
      spell: 'Inspire/Flicker'
    },
    strengths: ['Pushing', 'Speed Burst'],
    weaknesses: ['Extremely Squishy']
  }
];

export const GUIDES: Guide[] = [
  {
    id: 'g1',
    title: 'Beginner: Map Awareness',
    category: 'Beginner',
    content: 'Always check the mini-map every 3-5 seconds. Look for missing enemies and ping your teammates if you see an enemy rotation. Map control wins games.',
    icon: '🗺️'
  },
  {
    id: 'g2',
    title: 'Advanced: Objective Control',
    category: 'Advanced',
    content: 'Prioritize Turtle and Lord over small skirmishes. Zone out the enemy jungler during Lord takes using your Tank or Fighter.',
    icon: '🐉'
  },
  {
    id: 'g3',
    title: 'Rotation: Mid Lane Role',
    category: 'Beginner',
    content: 'Clear the first wave fast, then rotate to Gold Lane or help your Jungler at the Lithowanderer. Don\'t overextend!',
    icon: '🔄'
  }
];

export const NEWS: NewsItem[] = [
  {
    id: 'n1',
    date: '2024-05-20',
    title: 'Patch 1.8.78 Summary',
    summary: 'Balance adjustments for Tanks and the new Sky Piercer item introduction.',
    fullText: 'This patch focuses on reducing the dominance of Tank Junglers while giving Assassins more tools through the new Sky Piercer item...'
  },
  {
    id: 'n2',
    date: '2024-05-15',
    title: 'META Shift: The Rise of Support',
    summary: 'Why Mathilda and Angela are dominating the current ranked matches.',
    fullText: 'Support heroes are seeing a resurgence due to recent item buffs that enhance shielding and healing efficiency...'
  }
];
