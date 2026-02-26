import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Heart, Zap, TrendingUp, Brain, PersonStanding } from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import LanguageToggle from '../components/LanguageToggle';
import InfoHover from '../components/InfoHover';
import AudioPlayer from '../components/AudioPlayer';
import '../styles/pages/CharacterSheet.scss';

const CharacterSheet = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [health] = useState(1000);
  const [stamina] = useState(1000);
  const [experience] = useState(1);

  const stats = {
    power: 1,
    defense: 1,
    shokan: 1,
    speed: 1,
  };

  const statsData = [
    { stat: t('character.statistics.power'), value: stats.power },
    { stat: t('character.statistics.defense'), value: stats.defense },
    { stat: t('character.statistics.shokan'), value: stats.shokan },
    { stat: t('character.statistics.speed'), value: stats.speed },
  ];

  return (
    <div className="character-sheet">
      <div className="background-effect" />
      <LanguageToggle />
      <motion.button
        className="back-button"
        onClick={() => navigate('/')}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowLeft size={24} />
      </motion.button>
      <div className="character-container-sheet">
        <motion.div
          className="character-left"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="character-image-wrapper">
            <img
              src="/images/full.png"
              alt="Kai Von Arkham"
              className="character-image"
            />
            <InfoHover
              position={{ top: '2%', left: '41%' }}
              title={t('character.psychological.title')}
              content={t('character.psychological.content', { returnObjects: true })}
              icon={Brain}
            />
            <InfoHover
              position={{ top: '35%', left: '41%' }}
              title={t('character.physical.title')}
              content={t('character.physical.content', { returnObjects: true })}
              icon={PersonStanding}
            />
          </div>
        </motion.div>
        <motion.div
          className="character-right"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="nameplate">
            <h1 className="character-name">{t('character.title')}</h1>
          </div>
          <div className="clip-section">
            <div className="clip-item">
              <span className="clip-label">{t('character.info.age')}</span>
              <span className="clip-value">{t('character.info.ageValue')}</span>
            </div>
            <div className="clip-item">
              <span className="clip-label">{t('character.info.race')}</span>
              <span className="clip-value">{t('character.info.raceValue')}</span>
            </div>
            <div className="clip-item">
              <span className="clip-label">{t('character.info.rank')}</span>
              <span className="clip-value">{t('character.info.rankValue')}</span>
            </div>
            <div className="clip-item">
              <span className="clip-label">{t('character.info.voice')}</span>
              <span className="clip-value">
                <AudioPlayer src={t('character.info.voiceValue')} />
              </span>
            </div>
          </div>
          <div className="section">
            <h3 className="section-title">{t('character.intro.title')}</h3>
            <div className="section-text">{t('character.intro.content', { returnObjects: true }).map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="sectionSplit">
            <div className="split">
              <h3 className="split-title">{t('character.desires.title')}</h3>
               <div className="split-text">{t('character.desires.content', { returnObjects: true }).map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            </div>
            <div className="split"> 
              <h3 className="split-title">{t('character.fears.title')}</h3>
               <div className="split-text">{t('character.fears.content', { returnObjects: true }).map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            </div>
          </div>
          <div className="section">
            <h3 className="section-title">{t('character.attributes.title')}</h3>
            <div className="attributes-statistics-grid">
              <div className="attributes-left">
                <div className="attributes-left">
                  {/* HEALTH */}
                  <div className="attribute-bar health-bar">
                    <div className="attribute-header">
                      <Heart size={18} color='var(--stat-health)' />
                      <span>{t('character.statistics.health')}</span>
                      <span className="value">{health}/1000</span>
                    </div>
                    <div className="bar-track">
                      <div
                        className="bar-fill"
                        style={{ width: `${(health / 100) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* STAMINA */}
                  <div className="attribute-bar stamina-bar">
                    <div className="attribute-header">
                      <Zap size={18} color='var(--stat-stamina)' />
                      <span>{t('character.statistics.stamina')}</span>
                      <span className="value">{stamina}/1000</span>
                    </div>
                    <div className="bar-track">
                      <div
                        className="bar-fill"
                        style={{ width: `${(stamina / 100) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* EXPERIENCE */}
                  <div className="attribute-bar experience-bar">
                    <div className="attribute-header">
                      <TrendingUp size={18} color='var(--stat-experience)' />
                      <span>{t('character.statistics.experience')}</span>
                      <span className="value">{experience}/6000</span>
                    </div>
                    <div className="bar-track">
                      <div
                        className="bar-fill"
                        style={{ width: `${(experience / 100) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="statistics-right">
                <ResponsiveContainer width="100%" height={275}>
                  <RadarChart cx="50%" cy="50%" outerRadius="85%" data={statsData}>
                    <PolarGrid 
                      radialLines={true} 
                    />
                    <PolarAngleAxis 
                      dataKey="stat" 
                      tick={{ fill: 'var(--color-accent-lime)', fontSize: 14, fontWeight: 400 }} 
                    />
                    <PolarRadiusAxis 
                      tick={false}
                      axisLine={false}
                      ticks={[0, 2, 4, 6, 8, 10]}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'rgba(0,0,0,0.85)',
                        border: '1px solid var(--color-accent-lime)',
                        borderRadius: '8px',
                        boxShadow: '0 0 12px rgba(0, 132, 255, 0.3)',
                        fontSize: '0.85rem',
                      }}
                      labelStyle={{
                        color: 'var(--color-accent-lime)',
                        fontWeight: 400,
                      }}
                      itemStyle={{
                        color: 'var(--color-text-primary)',
                      }}
                      cursor={{ stroke: 'var(--color-accent-lime)', strokeDasharray: '3 3' }}
                    />
                    <Radar
                      dataKey="value"
                      stroke="none"
                      strokeWidth={0}
                      fill="var(--color-accent-lime)"
                      fillOpacity={0.5}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CharacterSheet;