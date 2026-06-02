// =============================================================================
// CONSULT page
// =============================================================================
// Hero copy and "The work" copy are right at the top — easy to edit.
// Packages come from src/data/packages.js (consultPackages).
// =============================================================================

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { consultPackages, programs } from '../data/packages.js';
import PackageCard from '../components/PackageCard.jsx';

// ─── TEXT — edit these freely ──────────────────────────────────────────────
const HERO_NUMBER   = "02";
const HERO_TITLE    = "Consult.";
const HERO_SUBTITLE = "Year-round development, structured month by month. Tournament calendar, practice plan, equipment and academy decisions — assembled into one operating plan and adjusted against real results. Built for juniors who want the year ahead to compound, not to drift.";

const WORK_EYEBROW  = "The work";
const WORK_HEADING  = "DEVELOPMENT PROTOCOLS";
const WORK_BODY_1   = "We start with where the game is — handicap, recent results, recurring weaknesses, available hours, and the competitive bar the player is playing to reach.";
const WORK_BODY_2   = "From there we build the year: which tournaments matter, how practice is structured between them, what equipment and academy decisions need making, and where the weeks of pressure fall. Then we adjust monthly against what's actually happening on the course. Direct WhatsApp and email access to the team throughout. No tournament wasted, no practice unfocused.";

const PACKAGES_EYEBROW = "Packages";
const PACKAGES_HEADING = "Three tiers, three levels of involvement.";
const PACKAGES_CAPTION = "All tiers include direct WhatsAp
