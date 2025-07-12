
// RefugeeForm.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaSearch, FaBriefcase, FaUserCircle, FaBuilding, FaMapMarkerAlt, FaClock, FaEdit  } from 'react-icons/fa';
import RefugeeService from '../services/api';


const RefugeeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = !!id;
  
   const [formData, setFormData] = useState({
    name: '',
    country: '',
    birthDate: '',
    status: 'Ativo',
    phone: '',
    email: '',
    education: '',
    skills: '',
  });
  
  const [loading, setLoading] = useState(isEditing);
  const [formErrors, setFormErrors] = useState({});
  const [apiError, setApiError] = useState('');

  // Carregar dados para edição
  useEffect(() => {
    if (isEditing) {
      const fetchRefugee = async () => {
        try {
          setLoading(true);
          const refugee = await RefugeeService.getById(id);
          setFormData(refugee);
          setApiError('');
        } catch (err) {
          setApiError(err.message);
        } finally {
          setLoading(false);
        }
      };
      
      fetchRefugee();
    }
  }, [id, isEditing]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Limpar erro ao alterar
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

      const handleDateChange = (e) => {
        const { value } = e.target;
        setFormData(prev => new RefugeeModel({ 
            ...prev, 
            birthDate: value ? new Date(value) : null 
        }));
        
        if (formErrors.birthDate) {
            setFormErrors(prev => ({ ...prev, birthDate: '' }));
        }
    };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) errors.name = 'Nome é obrigatório';
    if (!formData.country) errors.country = 'País de origem é obrigatório';
    if (!formData.birthDate || formData.birthDate < 1) errors.birthDate = 'Data inválida';
    if (!formData.phone.trim()) errors.phone = 'Telefone é obrigatório';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError('');
    
    if (validateForm()) {
      try {
        setLoading(true);
        
        if (isEditing) {
          await RefugeeService.update(id, formData);
        } else {
          await RefugeeService.create(formData);
        }
        
        // Redirecionar após sucesso
        navigate('/refugees');
      } catch (err) {
        setApiError(err.message || 'Ocorreu um erro. Por favor, tente novamente.');
      } finally {
        setLoading(false);
      }
    }
  };

  if (loading) {
    return (
      <div className="admin-card">
        <div className="loading">
          <i className="fas fa-spinner fa-spin"></i> Carregando...
        </div>
      </div>
    );
  }

  return (
    <div className="admin-card">
      <div className="card-header">
        <h2>{isEditing ? 'Editar Refugiado' : 'Cadastrar Novo Refugiado'}</h2>
      </div>
      
      {apiError && <div className="error-message">{apiError}</div>}
      
      <form onSubmit={handleSubmit} className="form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Nome Completo *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={formErrors.name ? 'error' : ''}
            />
            {formErrors.name && <div className="error-message">{formErrors.name}</div>}
          </div>
          
          <div className="form-group">
            <label htmlFor="country">País de Origem *</label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className={formErrors.country ? 'error' : ''}
            >
              <option value="">Selecione um país</option>
              <option value="Síria">Síria</option>
              <option value="Venezuela">Venezuela</option>
              <option value="Ucrânia">Ucrânia</option>
              <option value="Afeganistão">Afeganistão</option>
              <option value="Colômbia">Colômbia</option>
              <option value="Angola">Angola</option>
              <option value="Haiti">Haiti</option>
              <option value="Outro">Outro</option>
            </select>
            {formErrors.country && <div className="error-message">{formErrors.country}</div>}
          </div>
        </div>
        
        <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="birthDate">Data de Nascimento *</label>
                        <input
                            type="date"
                            id="birthDate"
                            name="birthDate"
                            value={formData.birthDate ? formData.birthDate.toISOString().split('T')[0] : ''}
                            onChange={handleDateChange}
                            className={formErrors.birthDate ? 'error' : ''}
                            max={new Date().toISOString().split('T')[0]}
                        />
                        {formErrors.birthDate && <div className="error-message">{formErrors.birthDate}</div>}
                    </div>
          
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="Ativo">Ativo</option>
              <option value="Inativo">Inativo</option>
              <option value="Em processo">Em processo</option>
            </select>
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone">Telefone *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(00) 00000-0000"
              className={formErrors.phone ? 'error' : ''}
            />
            {formErrors.phone && <div className="error-message">{formErrors.phone}</div>}
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email@exemplo.com"
            />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="education">Formação Acadêmica</label>
          <input
            type="text"
            id="education"
            name="education"
            value={formData.education}
            onChange={handleChange}
            placeholder="Ex: Ensino Médio Completo, Graduação em Engenharia..."
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="skills">Habilidades e Competências</label>
          <input
            type="text"
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            placeholder="Ex: Construção Civil, Informática, Idiomas..."
          />
        </div>
        
      
        <div className="form-actions">
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? (
              <>
                <i className="fas fa-spinner fa-spin"></i> Processando...
              </>
            ) : isEditing ? 'Atualizar Refugiado' : 'Cadastrar Refugiado'}
          </button>
          <button 
            type="button" 
            className="btn btn-secondary"
            onClick={() => navigate('/refugees')}
            disabled={loading}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default RefugeeForm;