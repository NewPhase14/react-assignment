import { Diagnoses } from '../Api';
import { atom } from 'jotai/vanilla';

export const DiagnosesAtom = atom<Diagnoses[]>([]);
