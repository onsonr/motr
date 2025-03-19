// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.28.0
// source: query.sql

package models

import (
	"context"
)

const checkHandleExists = `-- name: CheckHandleExists :one
SELECT COUNT(*) > 0 as handle_exists FROM profiles 
WHERE handle = ? 
AND deleted_at IS NULL
`

func (q *Queries) CheckHandleExists(ctx context.Context, handle string) (bool, error) {
	row := q.db.QueryRowContext(ctx, checkHandleExists, handle)
	var handle_exists bool
	err := row.Scan(&handle_exists)
	return handle_exists, err
}

const createSession = `-- name: CreateSession :one
INSERT INTO sessions (
    id,
    browser_name,
    browser_version,
    client_ipaddr,
    platform,
    is_desktop,
    is_mobile,
    is_tablet,
    is_tv,
    is_bot,
    challenge,
    is_human_first,
    is_human_last,
    profile_id
) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )
RETURNING id, created_at, updated_at, deleted_at, browser_name, browser_version, client_ipaddr, platform, is_desktop, is_mobile, is_tablet, is_tv, is_bot, challenge, is_human_first, is_human_last, profile_id
`

type CreateSessionParams struct {
	ID             string `json:"id"`
	BrowserName    string `json:"browser_name"`
	BrowserVersion string `json:"browser_version"`
	ClientIpaddr   string `json:"client_ipaddr"`
	Platform       string `json:"platform"`
	IsDesktop      bool   `json:"is_desktop"`
	IsMobile       bool   `json:"is_mobile"`
	IsTablet       bool   `json:"is_tablet"`
	IsTv           bool   `json:"is_tv"`
	IsBot          bool   `json:"is_bot"`
	Challenge      string `json:"challenge"`
	IsHumanFirst   bool   `json:"is_human_first"`
	IsHumanLast    bool   `json:"is_human_last"`
	ProfileID      int64  `json:"profile_id"`
}

func (q *Queries) CreateSession(ctx context.Context, arg CreateSessionParams) (Session, error) {
	row := q.db.QueryRowContext(ctx, createSession,
		arg.ID,
		arg.BrowserName,
		arg.BrowserVersion,
		arg.ClientIpaddr,
		arg.Platform,
		arg.IsDesktop,
		arg.IsMobile,
		arg.IsTablet,
		arg.IsTv,
		arg.IsBot,
		arg.Challenge,
		arg.IsHumanFirst,
		arg.IsHumanLast,
		arg.ProfileID,
	)
	var i Session
	err := row.Scan(
		&i.ID,
		&i.CreatedAt,
		&i.UpdatedAt,
		&i.DeletedAt,
		&i.BrowserName,
		&i.BrowserVersion,
		&i.ClientIpaddr,
		&i.Platform,
		&i.IsDesktop,
		&i.IsMobile,
		&i.IsTablet,
		&i.IsTv,
		&i.IsBot,
		&i.Challenge,
		&i.IsHumanFirst,
		&i.IsHumanLast,
		&i.ProfileID,
	)
	return i, err
}

const getChallengeBySessionID = `-- name: GetChallengeBySessionID :one
SELECT challenge FROM sessions
WHERE id = ? AND deleted_at IS NULL
LIMIT 1
`

func (q *Queries) GetChallengeBySessionID(ctx context.Context, id string) (string, error) {
	row := q.db.QueryRowContext(ctx, getChallengeBySessionID, id)
	var challenge string
	err := row.Scan(&challenge)
	return challenge, err
}

const getCredentialByID = `-- name: GetCredentialByID :one
SELECT id, created_at, updated_at, deleted_at, handle, credential_id, authenticator_attachment, origin, type, transports FROM credentials
WHERE credential_id = ?
AND deleted_at IS NULL
LIMIT 1
`

func (q *Queries) GetCredentialByID(ctx context.Context, credentialID string) (Credential, error) {
	row := q.db.QueryRowContext(ctx, getCredentialByID, credentialID)
	var i Credential
	err := row.Scan(
		&i.ID,
		&i.CreatedAt,
		&i.UpdatedAt,
		&i.DeletedAt,
		&i.Handle,
		&i.CredentialID,
		&i.AuthenticatorAttachment,
		&i.Origin,
		&i.Type,
		&i.Transports,
	)
	return i, err
}

const getCredentialsByHandle = `-- name: GetCredentialsByHandle :many
SELECT id, created_at, updated_at, deleted_at, handle, credential_id, authenticator_attachment, origin, type, transports FROM credentials
WHERE handle = ?
AND deleted_at IS NULL
`

func (q *Queries) GetCredentialsByHandle(ctx context.Context, handle string) ([]Credential, error) {
	rows, err := q.db.QueryContext(ctx, getCredentialsByHandle, handle)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []Credential
	for rows.Next() {
		var i Credential
		if err := rows.Scan(
			&i.ID,
			&i.CreatedAt,
			&i.UpdatedAt,
			&i.DeletedAt,
			&i.Handle,
			&i.CredentialID,
			&i.AuthenticatorAttachment,
			&i.Origin,
			&i.Type,
			&i.Transports,
		); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Close(); err != nil {
		return nil, err
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const getHumanVerificationNumbers = `-- name: GetHumanVerificationNumbers :one
SELECT is_human_first, is_human_last FROM sessions
WHERE id = ? AND deleted_at IS NULL
LIMIT 1
`

type GetHumanVerificationNumbersRow struct {
	IsHumanFirst bool `json:"is_human_first"`
	IsHumanLast  bool `json:"is_human_last"`
}

func (q *Queries) GetHumanVerificationNumbers(ctx context.Context, id string) (GetHumanVerificationNumbersRow, error) {
	row := q.db.QueryRowContext(ctx, getHumanVerificationNumbers, id)
	var i GetHumanVerificationNumbersRow
	err := row.Scan(&i.IsHumanFirst, &i.IsHumanLast)
	return i, err
}

const getProfileByAddress = `-- name: GetProfileByAddress :one
SELECT id, created_at, updated_at, deleted_at, address, handle, origin, name FROM profiles
WHERE address = ? AND deleted_at IS NULL
LIMIT 1
`

func (q *Queries) GetProfileByAddress(ctx context.Context, address string) (Profile, error) {
	row := q.db.QueryRowContext(ctx, getProfileByAddress, address)
	var i Profile
	err := row.Scan(
		&i.ID,
		&i.CreatedAt,
		&i.UpdatedAt,
		&i.DeletedAt,
		&i.Address,
		&i.Handle,
		&i.Origin,
		&i.Name,
	)
	return i, err
}

const getProfileByHandle = `-- name: GetProfileByHandle :one
SELECT id, created_at, updated_at, deleted_at, address, handle, origin, name FROM profiles
WHERE handle = ? 
AND deleted_at IS NULL
LIMIT 1
`

func (q *Queries) GetProfileByHandle(ctx context.Context, handle string) (Profile, error) {
	row := q.db.QueryRowContext(ctx, getProfileByHandle, handle)
	var i Profile
	err := row.Scan(
		&i.ID,
		&i.CreatedAt,
		&i.UpdatedAt,
		&i.DeletedAt,
		&i.Address,
		&i.Handle,
		&i.Origin,
		&i.Name,
	)
	return i, err
}

const getProfileByID = `-- name: GetProfileByID :one
SELECT id, created_at, updated_at, deleted_at, address, handle, origin, name FROM profiles
WHERE id = ? AND deleted_at IS NULL
LIMIT 1
`

func (q *Queries) GetProfileByID(ctx context.Context, id string) (Profile, error) {
	row := q.db.QueryRowContext(ctx, getProfileByID, id)
	var i Profile
	err := row.Scan(
		&i.ID,
		&i.CreatedAt,
		&i.UpdatedAt,
		&i.DeletedAt,
		&i.Address,
		&i.Handle,
		&i.Origin,
		&i.Name,
	)
	return i, err
}

const getSessionByClientIP = `-- name: GetSessionByClientIP :one
SELECT id, created_at, updated_at, deleted_at, browser_name, browser_version, client_ipaddr, platform, is_desktop, is_mobile, is_tablet, is_tv, is_bot, challenge, is_human_first, is_human_last, profile_id FROM sessions
WHERE client_ipaddr = ? AND deleted_at IS NULL
LIMIT 1
`

func (q *Queries) GetSessionByClientIP(ctx context.Context, clientIpaddr string) (Session, error) {
	row := q.db.QueryRowContext(ctx, getSessionByClientIP, clientIpaddr)
	var i Session
	err := row.Scan(
		&i.ID,
		&i.CreatedAt,
		&i.UpdatedAt,
		&i.DeletedAt,
		&i.BrowserName,
		&i.BrowserVersion,
		&i.ClientIpaddr,
		&i.Platform,
		&i.IsDesktop,
		&i.IsMobile,
		&i.IsTablet,
		&i.IsTv,
		&i.IsBot,
		&i.Challenge,
		&i.IsHumanFirst,
		&i.IsHumanLast,
		&i.ProfileID,
	)
	return i, err
}

const getSessionByID = `-- name: GetSessionByID :one
SELECT id, created_at, updated_at, deleted_at, browser_name, browser_version, client_ipaddr, platform, is_desktop, is_mobile, is_tablet, is_tv, is_bot, challenge, is_human_first, is_human_last, profile_id FROM sessions
WHERE id = ? AND deleted_at IS NULL
LIMIT 1
`

func (q *Queries) GetSessionByID(ctx context.Context, id string) (Session, error) {
	row := q.db.QueryRowContext(ctx, getSessionByID, id)
	var i Session
	err := row.Scan(
		&i.ID,
		&i.CreatedAt,
		&i.UpdatedAt,
		&i.DeletedAt,
		&i.BrowserName,
		&i.BrowserVersion,
		&i.ClientIpaddr,
		&i.Platform,
		&i.IsDesktop,
		&i.IsMobile,
		&i.IsTablet,
		&i.IsTv,
		&i.IsBot,
		&i.Challenge,
		&i.IsHumanFirst,
		&i.IsHumanLast,
		&i.ProfileID,
	)
	return i, err
}

const getVaultConfigByCID = `-- name: GetVaultConfigByCID :one
SELECT id, created_at, updated_at, deleted_at, handle, origin, address, cid, config, session_id, redirect_uri FROM vaults
WHERE cid = ? 
AND deleted_at IS NULL
LIMIT 1
`

func (q *Queries) GetVaultConfigByCID(ctx context.Context, cid string) (Vault, error) {
	row := q.db.QueryRowContext(ctx, getVaultConfigByCID, cid)
	var i Vault
	err := row.Scan(
		&i.ID,
		&i.CreatedAt,
		&i.UpdatedAt,
		&i.DeletedAt,
		&i.Handle,
		&i.Origin,
		&i.Address,
		&i.Cid,
		&i.Config,
		&i.SessionID,
		&i.RedirectUri,
	)
	return i, err
}

const getVaultRedirectURIBySessionID = `-- name: GetVaultRedirectURIBySessionID :one
SELECT redirect_uri FROM vaults
WHERE session_id = ? 
AND deleted_at IS NULL
LIMIT 1
`

func (q *Queries) GetVaultRedirectURIBySessionID(ctx context.Context, sessionID string) (string, error) {
	row := q.db.QueryRowContext(ctx, getVaultRedirectURIBySessionID, sessionID)
	var redirect_uri string
	err := row.Scan(&redirect_uri)
	return redirect_uri, err
}

const insertCredential = `-- name: InsertCredential :one
INSERT INTO credentials (
    handle,
    credential_id,
    origin,
    type,
    transports
) VALUES (?, ?, ?, ?, ?)
RETURNING id, created_at, updated_at, deleted_at, handle, credential_id, authenticator_attachment, origin, type, transports
`

type InsertCredentialParams struct {
	Handle       string `json:"handle"`
	CredentialID string `json:"credential_id"`
	Origin       string `json:"origin"`
	Type         string `json:"type"`
	Transports   string `json:"transports"`
}

func (q *Queries) InsertCredential(ctx context.Context, arg InsertCredentialParams) (Credential, error) {
	row := q.db.QueryRowContext(ctx, insertCredential,
		arg.Handle,
		arg.CredentialID,
		arg.Origin,
		arg.Type,
		arg.Transports,
	)
	var i Credential
	err := row.Scan(
		&i.ID,
		&i.CreatedAt,
		&i.UpdatedAt,
		&i.DeletedAt,
		&i.Handle,
		&i.CredentialID,
		&i.AuthenticatorAttachment,
		&i.Origin,
		&i.Type,
		&i.Transports,
	)
	return i, err
}

const insertProfile = `-- name: InsertProfile :one
INSERT INTO profiles (
    address,
    handle,
    origin,
    name
) VALUES (?, ?, ?, ?)
RETURNING id, created_at, updated_at, deleted_at, address, handle, origin, name
`

type InsertProfileParams struct {
	Address string `json:"address"`
	Handle  string `json:"handle"`
	Origin  string `json:"origin"`
	Name    string `json:"name"`
}

func (q *Queries) InsertProfile(ctx context.Context, arg InsertProfileParams) (Profile, error) {
	row := q.db.QueryRowContext(ctx, insertProfile,
		arg.Address,
		arg.Handle,
		arg.Origin,
		arg.Name,
	)
	var i Profile
	err := row.Scan(
		&i.ID,
		&i.CreatedAt,
		&i.UpdatedAt,
		&i.DeletedAt,
		&i.Address,
		&i.Handle,
		&i.Origin,
		&i.Name,
	)
	return i, err
}

const softDeleteCredential = `-- name: SoftDeleteCredential :exec
UPDATE credentials
SET deleted_at = CURRENT_TIMESTAMP
WHERE credential_id = ?
`

func (q *Queries) SoftDeleteCredential(ctx context.Context, credentialID string) error {
	_, err := q.db.ExecContext(ctx, softDeleteCredential, credentialID)
	return err
}

const softDeleteProfile = `-- name: SoftDeleteProfile :exec
UPDATE profiles
SET deleted_at = CURRENT_TIMESTAMP
WHERE address = ?
`

func (q *Queries) SoftDeleteProfile(ctx context.Context, address string) error {
	_, err := q.db.ExecContext(ctx, softDeleteProfile, address)
	return err
}

const updateProfile = `-- name: UpdateProfile :one
UPDATE profiles
SET 
    name = ?,
    handle = ?,
    updated_at = CURRENT_TIMESTAMP
WHERE address = ? 
AND deleted_at IS NULL
RETURNING id, created_at, updated_at, deleted_at, address, handle, origin, name
`

type UpdateProfileParams struct {
	Name    string `json:"name"`
	Handle  string `json:"handle"`
	Address string `json:"address"`
}

func (q *Queries) UpdateProfile(ctx context.Context, arg UpdateProfileParams) (Profile, error) {
	row := q.db.QueryRowContext(ctx, updateProfile, arg.Name, arg.Handle, arg.Address)
	var i Profile
	err := row.Scan(
		&i.ID,
		&i.CreatedAt,
		&i.UpdatedAt,
		&i.DeletedAt,
		&i.Address,
		&i.Handle,
		&i.Origin,
		&i.Name,
	)
	return i, err
}

const updateSessionHumanVerification = `-- name: UpdateSessionHumanVerification :one
UPDATE sessions
SET 
    is_human_first = ?,
    is_human_last = ?,
    updated_at = CURRENT_TIMESTAMP
WHERE id = ?
RETURNING id, created_at, updated_at, deleted_at, browser_name, browser_version, client_ipaddr, platform, is_desktop, is_mobile, is_tablet, is_tv, is_bot, challenge, is_human_first, is_human_last, profile_id
`

type UpdateSessionHumanVerificationParams struct {
	IsHumanFirst bool   `json:"is_human_first"`
	IsHumanLast  bool   `json:"is_human_last"`
	ID           string `json:"id"`
}

func (q *Queries) UpdateSessionHumanVerification(ctx context.Context, arg UpdateSessionHumanVerificationParams) (Session, error) {
	row := q.db.QueryRowContext(ctx, updateSessionHumanVerification, arg.IsHumanFirst, arg.IsHumanLast, arg.ID)
	var i Session
	err := row.Scan(
		&i.ID,
		&i.CreatedAt,
		&i.UpdatedAt,
		&i.DeletedAt,
		&i.BrowserName,
		&i.BrowserVersion,
		&i.ClientIpaddr,
		&i.Platform,
		&i.IsDesktop,
		&i.IsMobile,
		&i.IsTablet,
		&i.IsTv,
		&i.IsBot,
		&i.Challenge,
		&i.IsHumanFirst,
		&i.IsHumanLast,
		&i.ProfileID,
	)
	return i, err
}

const updateSessionWithProfileID = `-- name: UpdateSessionWithProfileID :one
UPDATE sessions
SET 
    profile_id = ?,
    updated_at = CURRENT_TIMESTAMP
WHERE id = ?
RETURNING id, created_at, updated_at, deleted_at, browser_name, browser_version, client_ipaddr, platform, is_desktop, is_mobile, is_tablet, is_tv, is_bot, challenge, is_human_first, is_human_last, profile_id
`

type UpdateSessionWithProfileIDParams struct {
	ProfileID int64  `json:"profile_id"`
	ID        string `json:"id"`
}

func (q *Queries) UpdateSessionWithProfileID(ctx context.Context, arg UpdateSessionWithProfileIDParams) (Session, error) {
	row := q.db.QueryRowContext(ctx, updateSessionWithProfileID, arg.ProfileID, arg.ID)
	var i Session
	err := row.Scan(
		&i.ID,
		&i.CreatedAt,
		&i.UpdatedAt,
		&i.DeletedAt,
		&i.BrowserName,
		&i.BrowserVersion,
		&i.ClientIpaddr,
		&i.Platform,
		&i.IsDesktop,
		&i.IsMobile,
		&i.IsTablet,
		&i.IsTv,
		&i.IsBot,
		&i.Challenge,
		&i.IsHumanFirst,
		&i.IsHumanLast,
		&i.ProfileID,
	)
	return i, err
}
