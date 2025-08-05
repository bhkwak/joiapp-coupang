// src/pages/ProfilePage.js
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, db } from './firebaseConfig'
import { doc, updateDoc, serverTimestamp } from 'firebase/firestore'

export default function ProfilePage() {
  const [gender,   setGender]   = useState('')
  const [birthday, setBirthday] = useState('')
  const [hireYear, setHireYear] = useState('')
  const [error,    setError]    = useState('')
  const navigate = useNavigate()
  const uid      = auth.currentUser?.uid

  const handleSubmit = async e => {
    e.preventDefault()
    if (!gender || !birthday || !hireYear) {
      setError('모든 필드를 입력해주세요.')
      return
    }
    try {
      await updateDoc(doc(db, 'users', uid), {
        gender,
        birthday: new Date(birthday),
        hireYear: Number(hireYear),
        profileCompleted: true,
        profileUpdatedAt: serverTimestamp()
      })
      // now go on to Survey (or wherever you want)
      navigate('/survey')
    } catch (e) {
      console.error(e)
      setError('프로필 저장 중 오류가 발생했습니다.')
    }
  }

  return (
    <div style={{ maxWidth: 600, margin: '40px auto', padding: 20 }}>
      <h1>프로필 정보 입력</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 16 }}>
          <label>성별:</label><br/>
          <select
            value={gender}
            onChange={e => setGender(e.target.value)}
            required
          >
            <option value="">선택하세요</option>
            <option value="male">남성</option>
            <option value="female">여성</option>
            <option value="other">기타</option>
            <option value="prefer_not">응답 거부</option>
          </select>
        </div>

        <div style={{ marginBottom: 16 }}>
          <label>생년월일:</label><br/>
          <input
            type="date"
            value={birthday}
            onChange={e => setBirthday(e.target.value)}
            required
          />
        </div>

        <div style={{ marginBottom: 16 }}>
          <label>쿠팡 입사 연도:</label><br/>
          <input
            type="number"
            value={hireYear}
            onChange={e => setHireYear(e.target.value)}
            min="2000"
            max={new Date().getFullYear()}
            required
          />
        </div>

        <button
          type="submit"
          style={{
            padding: '8px 16px',
            background: '#283593',
            color: '#fff',
            border: 'none',
            borderRadius: 4,
            cursor: 'pointer'
          }}
        >
          저장하고 계속
        </button>
      </form>
                  <div className="footer">
        <p>© Szupia, Inc. 2019</p>
      </div>
    </div>
  )
}

