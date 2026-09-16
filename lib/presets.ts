export type PresetData = {
  name: string;
  description: string;
  levels: Record<number, [number, number, number, number]>; // [Inhale, Hold, Exhale, Rest]
};

export const BREATHING_PRESETS: Record<string, PresetData> = {
  '142': {
    name: '1-4-2 Lung Conditioning Pattern',
    levels: { 1: [1, 4, 2, 0], 2: [2, 8, 4, 0], 3: [3, 12, 6, 0], 4: [4, 16, 8, 0], 5: [5, 20, 10, 0] },
    description: 'A classic respiratory conditioning sequence designed to maximize blood oxygenation and expand vital lung capacity over time.'
  },
  'box': {
    name: 'Box Breathing (Navy SEAL Tactical Clarity)',
    levels: { 1: [4, 4, 4, 4], 2: [6, 6, 6, 6], 3: [8, 8, 8, 8], 4: [12, 12, 12, 12], 5: [16, 16, 16, 16] },
    description: 'The gold standard for high-stress grounding. Equal duration phases clear cortisol, settle racing hearts, and restore sharp mental clarity.'
  },
  '478': {
    name: '4-7-8 Relaxation (Nervous System Tranquilizer)',
    levels: { 1: [4, 7, 8, 0], 2: [5, 8, 9, 0], 3: [6, 9, 10, 0], 4: [7, 10, 11, 0], 5: [8, 11, 12, 0] },
    description: 'Acts as a natural chemical brake for your sympathetic nervous system. Highly recommended for severe anxiety and floating into deep sleep.'
  },
  'coherent': {
    name: 'Coherent / Resonant Breathing (Asthma & Panic Relief)',
    levels: { 1: [3, 0, 3, 0], 2: [4, 0, 4, 0], 3: [5, 0, 5, 0], 4: [6, 0, 6, 0], 5: [7, 0, 7, 0] },
    description: 'Balances the vagus nerve and optimizes heart rate variability (HRV). Zero hold times make this perfectly safe for active asthma management.'
  },
  'tactical': {
    name: 'Tactical Breathing (Sustained Equilibrium)',
    levels: { 1: [4, 2, 4, 2], 2: [5, 2, 5, 2], 3: [6, 2, 6, 2], 4: [7, 2, 7, 2], 5: [8, 2, 8, 2] },
    description: 'A specialized, low-overhead holding variant used by responders to reduce somatic anxiety without inducing lightheadedness.'
  },
  'pursed_lip': {
    name: 'Pursed-Lip Splinting (COPD & Air-Trapping Relief)',
    levels: { 1: [2, 0, 4, 0], 2: [3, 0, 6, 0], 3: [4, 0, 8, 0], 4: [5, 0, 10, 0], 5: [6, 0, 12, 0] },
    description: 'Creates passive mechanical backpressure to keep bronchial pathways open. Crucial for individuals with emphysema or structural shortness of breath.'
  },
  'physio_sigh': {
    name: 'Physiological Sigh (Acute Hyperventilation Intercept)',
    levels: { 1: [3, 0, 5, 1], 2: [4, 0, 6, 1], 3: [5, 0, 7, 2], 4: [5, 0, 8, 2], 5: [6, 0, 10, 2] },
    description: 'Simulates the biological double-inhale reflex to instantly re-inflate collapsed alveoli and maximize immediate carbon dioxide unloading.'
  },
  'cardiac_ext': {
    name: 'Extended Cardiac Exhale (Hypertension / Vagal Tone)',
    levels: { 1: [3, 1, 6, 1], 2: [4, 1, 8, 1], 3: [4, 2, 8, 2], 4: [5, 2, 10, 2], 5: [6, 2, 12, 2] },
    description: 'Exhale window is mathematically doubled relative to inhale. Maximizes acetylcholinergic outflow to safely downregulate heart rate and blood pressure.'
  },
  'belly': {
    name: 'Belly (Diaphragmatic) Breathing',
    levels: { 1: [4, 0, 4, 0], 2: [5, 0, 5, 0], 3: [6, 0, 6, 0], 4: [7, 0, 7, 0], 5: [8, 0, 8, 0] },
    description: 'Deep diaphragm-driven breathing that expands the belly rather than the chest. Lowers resting heart rate and reduces shallow, stress-driven chest breathing.'
  },
  'alternate_nostril': {
    name: 'Alternate Nostril Breathing (Nadi Shodhana)',
    levels: { 1: [4, 2, 4, 2], 2: [5, 2, 5, 2], 3: [6, 3, 6, 3], 4: [7, 3, 7, 3], 5: [8, 4, 8, 4] },
    description: 'A classical yogic technique alternating breath between nostrils to balance both hemispheres of the nervous system and sharpen focus.'
  }
};