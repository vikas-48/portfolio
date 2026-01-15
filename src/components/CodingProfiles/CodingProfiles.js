import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeContext } from '../../contexts/ThemeContext';
import { codingProfilesData } from '../../data/codingProfilesData';
import { SiLeetcode, SiCodechef, SiCodeforces } from "react-icons/si";

import './CodingProfiles.css';

function CodingProfiles() {
    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles(() => ({
        profileCard: {
            backgroundColor: theme.primary,
            boxShadow: `0px 0px 30px ${theme.secondary + '20'}`, // added opacity to shadow
            "&:hover": {
                backgroundColor: theme.primary,
                transform: 'scale(1.05)',
                boxShadow: `0px 0px 30px ${theme.secondary + '40'}`,
            }
        },
    }));

    const classes = useStyles();

    const getIcon = (platform) => {
        switch (platform.toLowerCase()) {
            case 'leetcode':
                return <SiLeetcode className="cp-icon" />;
            case 'codechef':
                return <SiCodechef className="cp-icon" />;
            case 'codeforces':
                return <SiCodeforces className="cp-icon" />;
            default:
                return null;
        }
    };

    return (
        <div className="coding-profiles" id="codingProfiles" style={{ backgroundColor: theme.secondary }}>
            <div className="coding-profiles--header">
                <h1 style={{ color: theme.primary }}>Coding Profiles</h1>
            </div>
            <div className="coding-profiles--body">
                <div className="coding-profiles--bodyContainer">
                    {codingProfilesData.map((profile) => (
                        <a
                            href={profile.link}
                            target="_blank"
                            rel="noreferrer"
                            className="cp-Link"
                            key={profile.id}
                        >
                            <div
                                className={`cp-card ${classes.profileCard}`}
                            >
                                <div className="cp-icon-box" style={{ color: theme.secondary }}>
                                    {getIcon(profile.platform)}
                                </div>
                                <h3 style={{ color: theme.secondary, fontFamily: 'var(--primaryFont)' }}>{profile.title}</h3>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CodingProfiles;
