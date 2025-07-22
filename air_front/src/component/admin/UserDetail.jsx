import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function UserDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  // 예시 사용자 정보 (실제론 API로 id 기반 조회)
  const user = {
    id,
    name: '최재윤',
    staffNo: '20193040',
    phone: '010-1234-5678',
    email: 'IMPRINCESS18@pac.co.kr',
    avatar: 'https://via.placeholder.com/150'
  }

  const styles = {
    container: {
      flex: 1,
      padding: '2rem',
      background: '#f0f4fb',
      boxSizing: 'border-box',
    },
    back: {
      fontSize: '1.5rem',
      cursor: 'pointer',
      marginBottom: '1rem',
      color: '#333'
    },
    card: {
      background: 'white',
      borderRadius: '12px',
      padding: '2rem',
      maxWidth: '720px',
      margin: '0 auto',
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      boxSizing: 'border-box'
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '2rem'
    },
    avatar: {
      width: '120px',
      height: '120px',
      borderRadius: '60px',
      objectFit: 'cover',
      marginRight: '2rem'
    },
    fields: {
      flex: 1,
      display: 'grid',
      gridTemplateColumns: '80px 1fr',
      rowGap: '1rem',
      alignItems: 'center'
    },
    label: {
      textAlign: 'right',
      paddingRight: '1rem',
      fontSize: '1rem'
    },
    input: {
      background: '#e0dfe4',
      border: 'none',
      borderRadius: '6px',
      padding: '0.75rem 1rem',
      fontSize: '0.95rem',
      color: '#1f263d'
    },
    btnRow: {
      marginTop: '2rem',
      display: 'flex',
      justifyContent: 'flex-end'
    },
    btn: {
      padding: '0.75rem 1.5rem',
      background: '#333',
      color: '#fff',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer'
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.back} onClick={() => navigate(-1)}>←</div>
      <div style={styles.card}>
        {/* 타이틀 */}
        <div style={{ ...styles.header, marginBottom: '1rem' }}>
          <h2 style={{ margin: 0 }}>{user.name}</h2>
        </div>

        {/* 프로필 + 정보 */}
        <div style={styles.header}>
          <img src={user.avatar} alt="avatar" style={styles.avatar} />
          <div style={styles.fields}>
            <div style={styles.label}>이름</div>
            <input style={styles.input} value={user.name} readOnly />

            <div style={styles.label}>사번</div>
            <input style={styles.input} value={user.staffNo} readOnly />

            <div style={styles.label}>휴대폰번호</div>
            <input style={styles.input} value={user.phone} readOnly />

            <div style={styles.label}>이메일</div>
            <input style={styles.input} value={user.email} readOnly />
          </div>
        </div>

        {/* 확인 버튼 */}
        <div style={styles.btnRow}>
          <button
            style={styles.btn}
            onClick={() => navigate(-1)}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  )
}
