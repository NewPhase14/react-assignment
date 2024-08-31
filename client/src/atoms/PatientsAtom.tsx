import { Patients } from "../Api";
import { atom } from "jotai/vanilla";

export const PatientsAtom = atom<Patients[]>([]);